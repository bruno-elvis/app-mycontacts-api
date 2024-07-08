module.exports = (error, request, response, next) => { // EXPRESS ERROR HANDLER
  console.log({ errorHandlerLog: error });

  response.sendStatus(500);
};
