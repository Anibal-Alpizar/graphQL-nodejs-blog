const jwt = require('jsonwebtoken');

const createJwtToken = (user) => {
    return jwt.sign({ user }, 'secret', {
        expiresIn: '1h'
    })
}

module.exports = {
    createJwtToken
}
