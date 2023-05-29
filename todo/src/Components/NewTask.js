import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewTask({addTask}) {
  const [text, setText] = useState("");
  const addMytask =()=> {
    addTask(text)
  }
  return (
    <div style={{textAlign:"center"}}>
        <TextField onChange={(e) => setText(e.target.value)}  id="standard-basic" label="Standard" variant="standard" />
        <Button variant="contained" onClick={addMytask} >Add</Button>
    </div>
  )
}

export default NewTask