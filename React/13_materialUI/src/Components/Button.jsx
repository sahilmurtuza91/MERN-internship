import React from 'react'
import { useState, useEffect } from 'react';
import { Stack, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';
function MyButton() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [loading]);
    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button variant="text">Button 1 Text</Button>
                <Button variant="contained">Button 2 Contained</Button>
                <Button variant="outlined">Button 3 Outlined</Button>
            </Stack>

            <h2>Teaxt Button</h2>
            <Stack spacing={2} direction="row">
                <Button>Primary</Button>
                <Button disabled>Disable</Button>
                <Button href="https://www.google.com">Link</Button>
            </Stack>

            <h2>Container button</h2>
            <Stack spacing={2} direction="row">
                <Button variant="contained">Contained</Button>
                <Button variant="contained" disabled>Disabled</Button>
                <Button variant="contained" href="https://www.google.com">Link</Button>
            </Stack>

            <br />
            <Button variant="contained" disableElevation>
                Disable elevation
            </Button>

            <br />
            <Button variant="outlined" >Primary</Button>

            <br />

            <Stack spacing={2} direction="row">
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
            </Stack>
            <br />
            <Stack spacing={3} direction="row">
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>

            <h2>Button icons and label </h2>
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Stack>



            <Stack spacing={3} direction="row">
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>

                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>

                <IconButton aria-label="fingerprint" color="success">
                    <Fingerprint />
                </IconButton>
            </Stack>


            <h2>Icon Buttons with Tooltip & Loading</h2>
            <Stack spacing={2} direction="row">
                <Tooltip title="Add to shopping cart">
                    <IconButton onClick={() => setLoading(true)} loading={loading}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Tooltip>
            </Stack>


        </div>


    )
}

export default MyButton

// Stack ka kaam hai elements ko line me arrange karna (with spacing)