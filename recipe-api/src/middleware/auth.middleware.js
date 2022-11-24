const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization
    if (authorization == undefined) {
        return res.status(401).send({message: "Unauthorized"});
    }
    const token = authorization.split(' ')[1];
    try {
        jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(401).send({message: "Unauthorized"});
    }
    next()
}

module.exports = authMiddleware;