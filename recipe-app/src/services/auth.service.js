import api from './api.service';
import TokenService from './token.service';

const ENDPOINT = `/auth`;

const signin = async (credentials) => {
    const response = await api.post(`${ENDPOINT}/signin`, credentials);
    const { accessToken } = response.data;
    TokenService.setLocalAccessToken(accessToken);
    return accessToken;
}

const AuthService = {
    signin
}

export default AuthService;