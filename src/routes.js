const express = require('express');

const routes = express.Router();

const projects = [{id: String, title: String, tasks: [] }]

routes.post('/projects', (req, res) => {

  const {id, title} = req.body;

  projects.push({id, title});

  return res.json(projects);
})

module.exports = routes;