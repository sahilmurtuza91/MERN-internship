import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
function MyCheckBox() {
    const [number, setNumber] = useState([]);

    function getValue(e) {
        let value = e.target.value;
        setNumber((prev) => [...prev, value]);
        console.log(value);
        console.log(number);
    }

    return (
        <div>
            <Checkbox color='default' />
            <Checkbox defaultChecked color="success" />

            <Checkbox value="One" onChange={(e) => { getValue(e) }} />
            <Checkbox value="Two" onChange={(e) => { getValue(e) }} />
            <Checkbox value="Three" onChange={(e) => { getValue(e) }} />

            {<p>Another type of checkbox</p>}
            <Checkbox indeterminate />

            {<p>Icone check box</p>}
            <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
            />

            {<p>Giving label to the check box</p>}
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox color="default" />}
                    label="Default"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Primary"
                />
                <FormControlLabel
                    control={<Checkbox color='secondary' />}
                    label="Secondary"
                />
                <FormControlLabel
                    control={<Checkbox color='success' />}
                    label="Success"
                />
            </FormGroup>
        </div>
    )
}

export default MyCheckBox;