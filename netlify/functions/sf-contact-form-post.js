const fetch = require("node-fetch");
const { GATSBY_SF_OID } = process.env;
const emailValidator = require("email-validator");

exports.handler = async function (event, context) {

    // Only allow POST
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const requiredParams = ['email', 'first_name', 'last_name', 'company', 'title']

    let formData = event.body;
    const decodedData = decodeURIComponent(formData);
    const params = new URLSearchParams(decodedData);
    // add sale force account id
    params.append('oid', GATSBY_SF_OID);

    for(let p of requiredParams) {
        if (!params.has(p)) {
            return {
                statusCode: 412,
                body: `${p} param is required.`,
            }
        }
    }

    // validate email
    const email = params.get('email');
    if(!emailValidator.validate(email)){
        return {
            statusCode: 412,
            body: 'email param is invalid',
        }
    }

    return fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        method: "POST",
        body: params.toString(),
    })
        .then((res) => {
            return {
                statusCode: 200,
                body: 'OK',
            };
        })
        .catch((error) => ({
            statusCode: 422,
            body: error,
        }));
}