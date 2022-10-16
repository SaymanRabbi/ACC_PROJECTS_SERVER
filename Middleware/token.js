const jwt = require('jsonwebtoken');
module.exports.genarateToken = (user) => {
    const payload = {
        email: user.email,
        role: user.role,
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
    return token;
}