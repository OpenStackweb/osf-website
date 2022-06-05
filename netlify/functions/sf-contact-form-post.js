const fetch = require("node-fetch");
const {GATSBY_SF_OID, GATSBY_FRIENDLY_CAPTCHA_API_KEY, GATSBY_FRIENDLY_CAPTCHA_SITE_KEY} = process.env;
const emailValidator = require("email-validator");
const friendlyCaptchaFieldName = 'frc-captcha-solution';

exports.handler = async function (event, context) {

    // Only allow POST
    if (event.httpMethod !== "POST") {
        return {statusCode: 405, body: "Method Not Allowed"};
    }

    const requiredParams = ['email', 'first_name', 'last_name', 'company', 'title', friendlyCaptchaFieldName]

    let formData = event.body;
    const decodedData = decodeURIComponent(formData);
    const params = new URLSearchParams(decodedData);
    // add sale force account id
    params.append('oid', GATSBY_SF_OID);

    for (let p of requiredParams) {
        if (!params.has(p)) {
            return {
                statusCode: 412,
                body: `${p} param is required.`,
            }
        }
    }

    // validate email
    const email = params.get('email');
    if (!emailValidator.validate(email)) {
        return {
            statusCode: 412,
            body: 'email param is invalid',
        }
    }

    // first validate captcha solution
    const friendlyCaptchaRequest = {
        solution: params.get(friendlyCaptchaFieldName),
        secret: GATSBY_FRIENDLY_CAPTCHA_API_KEY,
        sitekey: GATSBY_FRIENDLY_CAPTCHA_SITE_KEY,
    }

    return fetch('https://api.friendlycaptcha.com/api/v1/siteverify', {
        headers: {
            "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(friendlyCaptchaRequest),
    }).then((response) => {
        if (!response.ok)
            return {
                statusCode: 400,
                body: 'Invalid captcha response',
            };

        return fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            method: "POST",
            body: params.toString(),
        })
            .then((response) => {
                return {
                    statusCode: 200,
                    body: 'OK',
                };
            })
            .catch((error) => ({
                statusCode: 422,
                body: error,
            }));
    })
    .catch((error) => ({
        statusCode: 422,
        body: error,
    }));
};
