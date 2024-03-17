const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {

    const token = req.headers.authorization?.split(' ')[1];
    try {
        const verified = jwt.verify(token, 'secret')
        req.verifyUser = verified.user;
        next();
    } catch (error) {
        next();
    }

}

module.exports = {
    authenticate
}