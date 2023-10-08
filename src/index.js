const express = require('express');

require('express-async-errors');

const routes = require('./routes');

const app = express();

const serverPort = 3000;

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => { // EXPRESS ERROR HANDLER
    console.log(error);

    response.sendStatus(500);

});

app.listen(serverPort, console.log(`Server started at http://localhost/ in port: ${serverPort}`));
