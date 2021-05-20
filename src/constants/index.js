// export const API_BASE_URL = 'http://localhost:8080';
export const API_BASE_URL = "http://api.manager-user.dev-myrealtrip.net";
export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = 'http://local.myrealtrip.net:3000/oauth2/login/redirect'

export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/login/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
