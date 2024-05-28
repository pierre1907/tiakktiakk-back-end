
exports.normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
};

exports.errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
    default:
      throw error;
  }
};


exports.messError = (res, message="error") => {
  return res.status(401).json({"error": message});
} 