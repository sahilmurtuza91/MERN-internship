import React from 'react'
import { Slider, Stack, Box, } from '@mui/material'
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { useState } from 'react';

function MySlider() {
    const [value, setValue] = useState(30);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    }
    const [range, setrange] = useState([30, 80]);
    const handleRangeChange = (event, newValue)=>{
        setrange(newValue);
    }
    const marks = [
        {
            value: 0,
            label: "Start"
        },
        {
            value: 50,
            label: "Middle"
        },
        {
            value: 100,
            label: "End"
        }
    ]
    return (
        <div>
            <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1, width: 300 }}>
                <VolumeDown />
                <Slider
                    value={value}
                    onChange={handleChange}
                />
                <VolumeUp />
            </Stack>

            <Box sx={{ width: 250, ml: 4 }}>
                <Slider

                    defaultValue={70}
                    valueLabelDisplay='auto'
                    value={range}
                    onChange={handleRangeChange}
                >

                </Slider>
            </Box>

            <Box sx={{ width: 300, ml: 5 }}>
                <Slider
                    defaultValue={30}
                    valueLabelDisplay='auto'
                    step={10}
                    min={0}
                    max={100}
                    marks={marks}

                />
            </Box>

        </div>
    )
}

export default MySlider