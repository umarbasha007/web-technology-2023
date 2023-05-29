import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function Tasklist({ taskList }) {
  return (
    <div>
      <ul>
        {taskList.map(i => {
          return <>

            <li>   {i}</li>
          </>
        })}
      </ul>
    </div>
  )
}

export default Tasklist