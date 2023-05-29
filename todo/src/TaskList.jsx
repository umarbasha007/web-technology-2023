import { Button } from "@mui/base"


export default function TaskList({ listOfTask, deleteTask }) {


    const deleteparentTask = (value) => {
        deleteTask(value)
    }

    return <>
        <span>List tasks</span>
        <div>
            {
                listOfTask.map((i, index) => {
                    return <>
                        <li key={index}>{i}
                            <Button onClick={() => deleteparentTask(index)} >delete
                            </Button></li>
                    </>
                })
            }</div>
    </>
}