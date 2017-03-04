const nconf = require('nconf');
const jwt = require('jsonwebtoken');
const Promise = require('bluebird');
const co = require('co');

module.exports = (req, res, next) => {
    let token = null;
    let verify = Promise.promisify(jwt.verify);
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        token = req.query.token;
    }
    if (!token) {
        res.status(401).end();
    }
    co(function*() {
        yield verify(token, nconf.get('secret')).then(decoded => {
            req.user = JSON.parse(decoded.user);
            next();
        }).catch(err => {
            res.status(401).end();
        })
    })
}