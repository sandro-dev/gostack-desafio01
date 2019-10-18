const express = require('express');

const routes = express.Router();

routes.get('/projects', (req, res) => {
  return res.json({
    message: "Get all projects"
  });
})

module.exports = routes;