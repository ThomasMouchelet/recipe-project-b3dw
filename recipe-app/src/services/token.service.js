const getLocalAccessToken = () => {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken;
}

const TokenService = {
    getLocalAccessToken,
}

export default TokenService;