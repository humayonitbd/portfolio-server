const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


//middle ware
app.use(cors());
const projects = require('./Data/projects.json');

app.get('/', (req, res)=>{
    res.send('server is runnig')
})

app.get('/projects', (req, res)=>{
    res.send(projects)
})
app.get('/projects/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    // console.log(id)
    const projectsId = projects.find(td => td.id === id)
    res.send(projectsId)
})

app.listen(port, ()=>{
    console.log('your running port', port)
})