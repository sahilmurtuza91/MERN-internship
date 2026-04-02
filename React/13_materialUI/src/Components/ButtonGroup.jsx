import React from 'react'
import { Button, ButtonGroup } from "@mui/material"
function MyButtonGroup() {
    return (
        <div>
            <ButtonGroup variant="contained" >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

            <h1>Vertical Button Group</h1>
            <ButtonGroup variant="contained" orientation='vertical' >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>

        </div>
    )
}

export default MyButtonGroup