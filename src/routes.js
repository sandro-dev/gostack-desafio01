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
/** Create a project
 * @body id:String
 * @body title:String
 * @body tasks:Array
 */
routes.post('/projects', (req, res) => {

  const {id, title, tasks} = req.body;

  projects.push({id, title, tasks});

  return res.json(projects);
})

/**List all projects */
routes.get('/projects', (req, res) => {
  return res.json(projects);
});

/** Update a project title with @param id  */
routes.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  /*
  for (project of projects) {
    if(project.id == id) {
      project.title = title;
    }
  }  
  /*/
  let project = projects.find(proj => (proj.id == id));
  project.title = title;
  //*/

  return res.json(project);

});

module.exports = routes;