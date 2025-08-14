/**
 * Unified Turnstile Captcha Validation and Form Handler
 * Handles both direct validation requests and complete form processing with Netlify Forms integration
 * Node.js 14 compatible version using CommonJS modules
 */

const fetch = require('node-fetch');
const allowedForms = ['projects-contact', 'newsletter-contact', 'contact'];

exports.handler = async (event, context) => {
  console.log('TurnstileCaptchaValidation invoked:', event.httpMethod);

  // Only handle POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { GATSBY_TURNSTILE_SECRET_KEY, GATSBY_TURNSTILE_API_URL } = process.env;

    if (!GATSBY_TURNSTILE_SECRET_KEY) {
      console.error('Turnstile secret key not configured');
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: 'Server configuration error: Missing Turnstile credentials'
        })
      };
    }

    // Parse the request body to determine the type of request
    const contentType = event.headers['content-type'] || event.headers['Content-Type'] || '';
    let isFormSubmission = false;
    let formName = null;
    let token = null;
    let ip = null;
    let formParams = null;

    if (contentType.includes('application/x-www-form-urlencoded')) {
      console.log('Processing form submission...');
      isFormSubmission = true;

      formParams = new URLSearchParams(event.body);
      formName = formParams.get('form-name');
      token = formParams.get('cf-turnstile-response');

      console.log('Form name:', formName);
      console.log('Form data keys:', Array.from(formParams.keys()));

      // Only process projects-contact form
      if (!allowedForms.includes(formName)) {
        return {
          statusCode: 400,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            error: 'Invalid form name',
            received: formName,
            expected: allowedForms
          })
        };
      }
    } else {
      // This is a direct validation request (legacy or other integrations)
      console.log('Processing direct validation request...');

      // For direct validation, expect form data with cf-turnstile-response
      try {
        const params = new URLSearchParams(event.body);
        token = params.get('cf-turnstile-response');
      } catch (error) {
        console.error('Error parsing direct validation request:', error);
        return {
          statusCode: 400,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ error: 'Invalid request format' })
        };
      }
    }

    // Get client IP
    ip = event.headers['x-forwarded-for'] ||
         event.headers['cf-connecting-ip'] ||
         event.headers['x-real-ip'] ||
         'unknown';

    console.log('Turnstile token present:', !!token);
    console.log('Client IP:', ip);

    if (!token) {
      const errorMessage = isFormSubmission
        ? 'Captcha solution is invalid! Please complete the captcha verification.'
        : 'Missing captcha token';

      return {
        statusCode: 412,
        headers: { "Content-Type": isFormSubmission ? "text/plain" : "application/json" },
        body: isFormSubmission ? errorMessage : JSON.stringify({ error: errorMessage })
      };
    }

    // Validate with Cloudflare Turnstile
    console.log('Validating Turnstile token...');

    const turnstileFormData = new URLSearchParams();
    turnstileFormData.append('secret', GATSBY_TURNSTILE_SECRET_KEY);
    turnstileFormData.append('response', token);
    turnstileFormData.append('remoteip', ip);

    const url = GATSBY_TURNSTILE_API_URL || 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(url, {
      method: 'POST',
      body: turnstileFormData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const outcome = await result.json();
    console.log('Turnstile validation result:', outcome);

    if (!outcome.success) {
      console.error('Turnstile validation failed:', outcome['error-codes']);

      const errorMessage = isFormSubmission
        ? 'Captcha validation failed! Please refresh the page and try again.'
        : 'Captcha validation failed';

      return {
        statusCode: 412,
        headers: { "Content-Type": isFormSubmission ? "text/plain" : "application/json" },
        body: isFormSubmission ? errorMessage : JSON.stringify({
          success: false,
          error: outcome['error-codes']
        })
      };
    }

    console.log('Turnstile validation successful');

    // If this is a form submission, forward to Netlify Forms
    if (isFormSubmission) {
      console.log('Forwarding validated form to Netlify Forms...');

      // Prepare form data for Netlify (without the Turnstile token)
      const netlifyFormData = new URLSearchParams();
      for (const [key, value] of formParams.entries()) {
        if (key !== 'cf-turnstile-response') {
          netlifyFormData.append(key, value);
        }
      }

      // Determine the origin for Netlify Forms submission
      const origin = event.headers.origin ||
                    (event.headers.host ? `https://${event.headers.host}` : null) ||
                    'https://openinfra.org';

      console.log('Submitting to Netlify Forms at:', origin);

      const netlifyResponse = await fetch(`${origin}/`, {
        method: 'POST',
        body: netlifyFormData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Netlify-Function-TurnstileCaptchaValidation'
        },
      });

      console.log('Netlify Forms response status:', netlifyResponse.status);

      if (netlifyResponse.ok) {
        console.log('Form successfully submitted to Netlify Forms');
        return {
          statusCode: 200,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            success: true,
            message: 'Form submitted successfully'
          })
        };
      } else {
        const errorText = await netlifyResponse.text();
        console.error('Netlify Forms submission failed:', errorText);
        return {
          statusCode: netlifyResponse.status,
          headers: { "Content-Type": "text/plain" },
          body: errorText || 'Failed to submit form to Netlify'
        };
      }
    } else {
      // Direct validation request - return validation result
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          success: true,
          token: (outcome.cdata ?? null)
        })
      };
    }

  } catch (error) {
    console.error('Error in TurnstileCaptchaValidation:', error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: 'Server error during processing',
        message: 'Please try again later',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      })
    };
  }
};