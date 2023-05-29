
import { useEffect, useState } from "react";
import NewTask from './NewTask';
import TaskList from "./TaskList";
import CatsList from './Cats'

function App() {

  useEffect(() => {
    /* const savedTaskList = localStorage.getItem('taskList');
    setTaskList(savedTaskList.split(',')) */
    getAllTasks();
  }, [])

  const getAllTasks = async ()=> {
    const resp = await fetch('http://localhost:8000/tasks').then(t => t.json());
    console.log(resp)
    setTaskList(resp);
  }

  const [taskList, setTaskList] = useState([]);

  const addtask = async (task) => {

    // HTTP POST call to save data in server
    await fetch('http://localhost:8000/task', {
      method: 'POST',
      headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({ task: task })
    }).then(req => req.json())
    
    // const response = await req.json();

    const newTaskList = [task, ...taskList];
    // localStorage.setItem('taskList', newTaskList.join())
    setTaskList(newTaskList)
  }

  const deleteTask = async (taskIndex) => {
    const newtaskList =
      taskList.filter((val, index) => index !== taskIndex);
    // localStorage.setItem('taskList', newtaskList.join())

    await fetch(`http://localhost:8000/task/${taskIndex}`, {
      method: 'DELETE',
      headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(req => req.json())

    setTaskList(newtaskList)
  }
  

  return (
    <>
      {/* <CatsList /> */}
      <NewTask addtask={addtask} />
      <TaskList deleteTask={deleteTask} listOfTask={taskList} />
    </>
  );
}

export default App;
