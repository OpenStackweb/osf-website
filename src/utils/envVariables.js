export const getEnvVariable = (name) => {
  return typeof window === 'object' ? window[name] : process.env[`GATSBY_${name}`];
}

export const IDP_BASE_URL = 'IDP_BASE_URL';
export const OAUTH2_CLIENT_ID = 'OAUTH2_CLIENT_ID';
export const API_BASE_URL = 'API_BASE_URL';
export const SCOPES = 'SCOPES';

