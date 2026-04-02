import React from 'react'
import { FormControlLabel, FormGroup, Switch } from '@mui/material'
function MySwitch() {
    const getVlue = (e, val)=>{
        console.log(`e value: ${e} and value: ${val}`)
    }
  return (
    
    <div>
        <Switch 
        aria-label='switch'
        color="success"
        size="large"
        onChange={getVlue}
        />

    <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label"/>
        <FormControlLabel  control={<Switch />} required label="Required"/>
        <FormControlLabel control={<Switch />} disabled label="disable"/>
    </FormGroup>
    </div>
  )
}

export default MySwitch