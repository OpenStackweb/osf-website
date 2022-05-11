const fetch = require("node-fetch");
const { GATSBY_SF_OID } = process.env;

exports.handler = async function (event, context) {
    // todo: check params presence

    let body = event.body+`&oid=${GATSBY_SF_OID}`;

    return fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        method: "POST",
        body: body,
    })
        .then(() => {
            return {
                statusCode: 200,
                body: 'ok',
            };
        })
        .catch((error) => ({
            statusCode: 422,
            body: `Oops! Something went wrong. ${error}`,
        }));
}