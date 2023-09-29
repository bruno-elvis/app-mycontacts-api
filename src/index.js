const express = require('express');

const routes = require('./routes');

const app = express();

const serverPort = 3000;

app.use(express.json());
app.use(routes);


app.listen(serverPort, console.log(`Server started at http://localhost/ in port: ${serverPort}`));
