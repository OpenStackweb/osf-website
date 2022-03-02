import {getEnvVariable, IDP_BASE_URL, OAUTH2_CLIENT_ID} from './envVariables'
import {needsLogin} from "./alerts";

export const doRegistration = (origin, type) => {
    const idpBaseUrl = getEnvVariable(IDP_BASE_URL);
    const clientId = getEnvVariable(OAUTH2_CLIENT_ID);
    if( typeof window === 'object')
        window.location = `${idpBaseUrl}/auth/register?client_id=${clientId}&redirect_uri=${encodeURI(`${origin}/a/registration?membership_type=${type}`)}`;
}

export const handleApiError = (error) => {
    console.log('ERROR: ', error);

    if (error?.response?.status === 401) {
        needsLogin();
    }

    return error;
};