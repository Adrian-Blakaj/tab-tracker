const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicies = require('./policies/AuthenticationControllerPolicy');
const SongsController = require('./controllers/SongsController');

module.exports = app => {
  app.post(
    '/register',
    AuthenticationControllerPolicies.register,
    AuthenticationController.register
  );

  app.post('/login', AuthenticationController.login);

  app.get('/songs', SongsController.index);

  app.post('/songs', SongsController.post);
};
