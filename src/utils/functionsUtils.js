
export const getServerFunctionUrl = (functionName) => {
    const prefixDev = 'http://localhost:8888/.netlify/functions/';
    const prefixProd = '/.netlify/functions/';
    const isInDevelopment = ['dev', 'development', 'local'].includes(process.env.NODE_ENV);
    const prefix = isInDevelopment ? prefixDev : prefixProd;
    return `${prefix}${functionName}`;
}