const { checkValidationSchema } = require('./middlewares/checkSchema');
const { healthCheck } = require('./controllers/healthCheck');
const { getAlbums, getPhotos } = require('./controllers/albums');
const { albumByIdValidator } = require('./schemas/albums');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/albums', getAlbums);
  app.get('/albums/:id/photos', checkValidationSchema(albumByIdValidator), getPhotos);
};
