
export const getServerFunctionUrl = (functionName) => {
    const prefixDev = 'http://localhost:8888/.netlify/functions/';
    const prefixProd = '/.netlify/functions/';
    let prefix = process.env.NODE_ENV === 'dev' ? prefixDev : prefixProd;
    return `${prefix}${functionName}`;
}