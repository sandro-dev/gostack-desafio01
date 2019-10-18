const express = require('express');

const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(routes);

server.get('/', (req, res) => {
  return res.json({
    message: "The Node server is runnig..."
  });
});

server.listen(3333);