const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.json({
    message: "The Node server is runnig..."
  });
});

server.listen(3333);