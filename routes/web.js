/**
 * Digital Drops
 * Jack Bayliss
 */
const routes = require('express').Router();
const path = require('path');

routes.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../html/home.html"));
  
});

module.exports = routes;