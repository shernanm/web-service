const request = require('request-promise');

const errors = require('../errors');
const logger = require('../logger');

exports.getAlbums = qs => {
  const options = {
    method: 'GET',
    uri: 'https://jsonplaceholder.typicode.com/albums',
    qs,
    json: true
  };
  return request(options).catch(() => {
    logger.error('Error trying to consume album API');
    throw errors.albumError('Error consuming album API');
  });
};

exports.getPhotosBy = qs => {
  const options = {
    method: 'GET',
    uri: 'https://jsonplaceholder.typicode.com/photos',
    qs,
    json: true
  };

  return request(options).catch(() => {
    logger.error('Error trying to consume album API');
    throw errors.albumError('Error consuming album API');
  });
};
