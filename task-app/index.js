const express = require("express");
const cors = require('cors') // todo
const app = express();

app.use(cors());// todo
const PORT = 8000;
let alltasks = [];
app.use(express.json());


app.get('/tasks', (req, res)=> {
    res.send(alltasks)
})

app.post('/task', (req, res)=> {
    const { task } = req.body;
    console.log(task)
    alltasks.push(task);
    res.status(201).send({status: "Task Created"});
})

app.delete('/task/:id', (req,res)=> {
    const id = req.params.id;
    alltasks = alltasks.filter((val, index) => index !== Number(id));
    res.status(201).send({status: "Task Deleted"});
})
  
// configuration
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port--- "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);