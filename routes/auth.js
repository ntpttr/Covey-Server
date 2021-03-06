const jwt = require('express-jwt');
const secret = require('../config').secret;

/**
 * Gets the token from an incoming header
 * @param {*} req The request object
 * @return {string} The token
 */
function getTokenFromHeader(req) {
  if (req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

const auth = {
  required: jwt({
    secret: secret,
    userProperty: 'payload',
    algorithms: ['sha1', 'RS256', 'HS256'],
    getToken: getTokenFromHeader,
  }),
  optional: jwt({
    secret: secret,
    userProperty: 'payload',
    credentialsRequired: false,
    algorithms: ['sha1', 'RS256', 'HS256'],
    getToken: getTokenFromHeader,
  }),
};

module.exports = auth;
