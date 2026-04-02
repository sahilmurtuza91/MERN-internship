import React from 'react'
import {Box, Select, InputLabel, MenuItem, FormControl } from '@mui/material'
import { useState } from 'react'
function MySelect() {
    const [language, setlanguage] = useState("")
    const handleChnage = (e)=>{
        setlanguage(e.target.value)
    };
  return (
    <div> 
        <Box sx={{width:120}}>
            <FormControl fullWidth>
                <InputLabel id="language-label">Choose Language</InputLabel>
                <Select 
                labelId='language-label'
                value={language}
                label= "Choose Language"
                onChange={handleChnage}
                >
                    <MenuItem value="1">JavaScript</MenuItem>
                    <MenuItem value="2">React</MenuItem>
                    <MenuItem value="3">Node</MenuItem>
                    <MenuItem value="4">PHP</MenuItem>
                </Select>
            </FormControl>
        </Box>
    </div>
  )
}

export default MySelect
