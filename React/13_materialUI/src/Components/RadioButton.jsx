import React from 'react'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material'
function MyRadioButton() {
    const getvelue = (e) => {
        console.log(e.target.value );
        console.log("Radio button is checked", e.target.value);
    }
  return (
    <div>
        <FormControl>
            <FormLabel >Gender</FormLabel>
            <RadioGroup>
                <FormControlLabel value="female" control={<Radio  color="secondary"/>} label= "Feamle"  />
                <FormControlLabel value="male" control={<Radio color="success"/>} label="Male" />
                <FormControlLabel value="other" control={<Radio color="default"/>} label="Other" />
            </RadioGroup>
        </FormControl>

        {<p> Horizontally  Radio button</p>
        }
        <FormControl>
            <FormLabel >Gender</FormLabel>
            <RadioGroup row  onChange={getvelue}>
                <FormControlLabel value="female" control={<Radio />} label= "Feamle" />
                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                <FormControlLabel value="other" control={<Radio/>} label="Other" />
            </RadioGroup>
        </FormControl>
    </div>
  )
}

export default MyRadioButton