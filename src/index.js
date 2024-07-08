const express = require('express');

require('express-async-errors');

const routes = require('./routes');
const errorHandler = require('./app/middlewares/errorHandler');
const cors = require('./app/middlewares/cors');

const app = express();
const serverPort = 3001;

app.use(express.json());

app.use(cors);

app.use(routes);

app.use(errorHandler);

app.listen(serverPort, console.log(`Server started at http://localhost/ in port: ${serverPort}`));
