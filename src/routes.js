const express = require('express');

const routes = express.Router();

const projects = [];
let countRequest = 0;

/**
 * Middleware verifyProjectExists
 * Verify if a project exists by id
 * @param {String} id:String  
 * @param {*} req request
 * @param {*} res response
 * @param {*} next function call next middleware
 */
function verifyProjectExists(req, res, next) {
  const { id } = req.params;

  const project = projects.find(proj => (proj.id == id));

  if(!project){
    return res.status(400).json({error: "This project did not found"});
  }
  
  return next();
}

/**
 * Middleware log the numbers of request
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function logRequestNumber(req, res, next) {
  countRequest++;
  console.log(`Request number #${countRequest}`);
  return next(); 
  
}

routes.use(logRequestNumber);

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
routes.put('/projects/:id', verifyProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  let project = projects.find(proj => (proj.id == id));
  project.title = title;

  return res.json(project);
});

/** Delete a project 
 * @param {String} id  
 */
routes.delete('/projects/:id', verifyProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIdx = projects.findIndex( proj => (proj.id == id));
  
  projects.splice(projectIdx, 1);

  return res.send();
});

/** Create a task in a project 
 * @param {String} title 
 * @param {String} id  
 */
routes.post('/projects/:id/tasks', verifyProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  let project = projects.find( proj => (proj.id == id));
  project.tasks.push(title);

  return res.json(project);
});

module.exports = routes;