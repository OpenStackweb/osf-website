import { useState, useEffect, useRef } from 'react';

/*
 * Turnstile Captcha Hook
 * A custom React hook to integrate Cloudflare Turnstile Captcha
 */
const siteKey = `${process.env.GATSBY_TURNSTILE_SITE_KEY}`;
const useTurnstileCaptcha = ({ widget }) => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const turnstileCaptchaFieldName = 'cf-turnstile-response';

    useEffect(() => {
        if (window?.turnstile && widget?.current && !loading)
        {
            setLoading(true);
            window.turnstile.render(widget.current, {
                sitekey: siteKey,
                callback: setToken,
            });
        }
    }, [window?.turnstile, widget?.current]);

    return { token, siteKey, turnstileCaptchaFieldName };
};

export { useTurnstileCaptcha, useTurnstileCaptcha as default };


export const getErrorCodeToDescription = (errorCode) => {
    switch (errorCode) {
        case 'missing-input-secret': return 'Secret parameter not provided';
        case 'invalid-input-secret': return 'Secret key is invalid or expired';
        case 'missing-input-response': return 'Response parameter was not provided';
        case 'invalid-input-response': return 'Token is invalid, malformed, or expired';
        case 'bad-request': return 'Request is malformed';
        case 'timeout-or-duplicate': return 'Token has already been validated';
        case 'internal-error': return 'Cloudflare Internal error occurred';
    }
    return 'Unspecified error occurred';
};

/*
Error code	               Description		       	       	       Action required
missing-input-secret	Secret parameter not provided		       Ensure secret key is included
invalid-input-secret	Secret key is invalid or expired	       Check your secret key in the Cloudflare dashboard
missing-input-response	Response parameter was not provided        Ensure token is included
invalid-input-response	Token is invalid, malformed, or expired	   User should retry the challenge
bad-request	            Request is malformed	                   Check request format and parameters
timeout-or-duplicate	Token has already been validated	       Each token can only be used once
internal-error	        Internal error occurred	Retry the request
*/