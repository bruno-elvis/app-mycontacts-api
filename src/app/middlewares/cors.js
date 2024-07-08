module.exports = (request, response, next) => { // EXPRESS ERROR HANDLER
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  next();
};
