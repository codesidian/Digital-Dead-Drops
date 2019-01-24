/**
 * Digital Drops
 * Jack Bayliss
 */
const express = require('express');
const routes = require('./routes/web');
const app = express();

app.use('/', routes);
const port = 8080;
app.listen(port);