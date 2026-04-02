import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'

function MyTeaxtField() {
    const passwordhandla = (e)=>{
        console.log(e.target.value);
    }
  return (
    <div>
        {<br />}
        <Box sx={{}}>
            <TextField 
            label="Enter name"
            color='secondary'
            variant='filled'
            required
            />

            <TextField 
            label="Age"
            color="success"
            variant='outlined'
            type='date'
            
            />

            <TextField 
            label= "Password"
            variant='standard'
            type='password'
            onChange={passwordhandla}
            />
        </Box>

    </div>
  )
}

export default MyTeaxtField