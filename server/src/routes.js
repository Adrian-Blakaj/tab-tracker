const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicies = require('./policies/AuthenticationControllerPolicy');
const SongsController = require('./controllers/SongsController');
const BookmarksController = require('./controllers/BookmarksController');
const HistoriesController = require('./controllers/HistoriesController');
const isAuthenticated = require('./policies/isAuthenticated');

module.exports = app => {
  app.post(
    '/register',
    AuthenticationControllerPolicies.register,
    AuthenticationController.register
  );

  app.post('/login', AuthenticationController.login);

  app.get('/songs', SongsController.index);
  app.get('/songs/:songId', SongsController.show);
  app.post('/songs', SongsController.post);
  app.put('/songs/:songId', SongsController.put);

  app.get('/bookmarks', BookmarksController.index);
  app.post('/bookmarks', BookmarksController.post);
  app.delete('/bookmarks/:bookmarkId', BookmarksController.delete);

  app.get('/histories', HistoriesController.index);
  app.post('/histories', HistoriesController.post);
};
