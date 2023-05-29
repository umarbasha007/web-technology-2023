import { Button, Input } from "@mui/base";
import { useRef, useState } from "react";

const NewTask = (props) => {
    const [task, setTask] = useState("")
    const saveTextToTask = (e) => {
        const mytext = e.target.value;
        setTask(mytext)
      }
      const addMyTasktoTaskList = () => {
        props.addtask(task)
      }
    return <>
        <Input key="input" onChange={saveTextToTask} />
        <Button key="addTask" onClick={addMyTasktoTaskList} > Add task</Button>
    </>
}

export default NewTask;