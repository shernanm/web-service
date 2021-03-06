const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.BAD_REQUEST = 'bad_request';
exports.badRequest = message => internalError(message, exports.BAD_REQUEST);

exports.ALBUM_API_ERROR = 'error_consuming_album_api';
exports.albumError = message => internalError(message, exports.ALBUM_API_ERROR);
