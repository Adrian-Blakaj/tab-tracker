const AuthenticationController = require('./controllers/AuthenticationController');

const AuthenticationControllerPolicies = require('./policies/AuthenticationControllerPolicy');

module.exports = app => {
  app.post(
    '/register',
    AuthenticationControllerPolicies.register,
    AuthenticationController.register
  );

  app.post('/login', AuthenticationController.login);
};
