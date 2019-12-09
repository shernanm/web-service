const { getAlbums, getPhotosBy } = require('../services/albums');
const logger = require('../logger');

exports.getAlbums = (req, res, next) => {
  logger.info(`getAlbums method start, request methods: ${req.method}, endpoint: ${req.path}`);
  return getAlbums(req.query)
    .then(response => res.status(200).send(response))
    .catch(next);
};

exports.getPhotos = (req, res, next) => {
  const params = {
    albumId: req.params.id
  };
  logger.info(`getPhotos method star, request to list of images of an album by the id: ${params.albumId}`);
  return getPhotosBy(params)
    .then(response => {
      const albumImgUrl = response.map(({ url }) => url);
      return res.status(200).send(albumImgUrl);
    })
    .catch(next);
};
