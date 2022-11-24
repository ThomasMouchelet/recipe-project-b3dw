import jwt_decode from "jwt-decode";

const getLocalAccessToken = () => {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken;
}

const setLocalAccessToken = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
    return true
}

const checkToken = () => {
    const accessToken = getLocalAccessToken();
    if (accessToken) {
        return isValidToken(accessToken);
    } else {
        return false;
    }
}

const removeLocalAccessToken = () => {
    localStorage.removeItem('accessToken');
    return true;
}

const isValidToken = (accessToken) => {
    try {
        const decoded = jwt_decode(accessToken);
        console.log(decoded);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            return false;
        } else {
            return true;
        }
    } catch (err) {
        return false;
    }
}

const TokenService = {
    getLocalAccessToken,
    setLocalAccessToken,
    checkToken,
    removeLocalAccessToken
}

export default TokenService;