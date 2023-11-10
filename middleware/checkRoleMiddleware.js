const { verifyToken } = require('./authUtils');

module.exports = function(role) {
    return function(req, res, next) {
        verifyToken(req, res, next, role);
    };
};