const express = require('express');

const routes = express.Router();

const projects = [];

/** Create a project
 * @param {String} id
 * @param {String} title
 * @param {Array} tasks
 */
routes.post('/projects', (req, res) => {

  const {id, title, tasks} = req.body;

  const project = { 
    id, 
    title, 
    tasks
  }

  projects.push(project);

  return res.json(project);
})

/**List all projects */
routes.get('/projects', (req, res) => {
  return res.json(projects);
});

/** Update a project title 
 * @param {String} id  
 */
routes.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  let project = projects.find(proj => (proj.id == id));
  project.title = title;

  return res.json(project);
});

/** Delete a project 
 * @param {String} id  
 */
routes.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  const projectIdx = projects.findIndex( proj => (proj.id == id));
  
  projects.splice(projectIdx, 1);

  return res.send();
});


module.exports = routes;