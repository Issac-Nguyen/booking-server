const jwt = require('jsonwebtoken');
const config = require('../../config');

const withAuth = function(req, res, next) {
  let token = req.headers['authorization'];
  if (!token || token.split(' ').length < 2) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    token = token.split(' ')[1];
    // console.log('token auth', token)
    jwt.verify(token, config.secrecKey, function(err, decoded) {
      if (err) {
        res.status(200).json({
          success: false,
          msg: 'Session timeout. Please re-login',
          action: 'logout'
        });
      } else {
        req.body.user = {username: decoded.username, role: decoded.role};
        next();
      }
    });
  }
}

module.exports = withAuth;