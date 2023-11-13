const authMiddleware = require('./authMiddleware');

module.exports = function(role) {
    return function(req, res, next) {
        authMiddleware(req, res, next, role);
    };
};