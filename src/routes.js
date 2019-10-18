const express = require('express');

const routes = express.Router();

//{id: String, title: String, tasks: Array }
const projects = [  
  { 
    id: "1", 
    title: "Novo projeto", 
    tasks: [] 
  }
]

routes.post('/projects', (req, res) => {

  const {id, title} = req.body;

  projects.push({id, title});

  return res.json(projects);
})

routes.get('/projects', (req, res) => {
  return res.json(projects);
});

module.exports = routes;