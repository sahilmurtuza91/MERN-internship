import React from 'react'
import { Container } from '@mui/material'
function MyContainer() {
  return (
    <div>
        <Container maxWidth="xs" sx={{bgcolor:"skyblue", color:'white'}}>
            <h1>React Material UI | Container | maxWidth="xs"</h1>
        </Container>

        <Container maxWidth="sm" sx={{bgcolor:"skyblue", color:'white'}}>
            <h1>React Material UI | Container | maxWidth="sm"</h1>
        </Container>

        <Container maxWidth="md" sx={{bgcolor:"skyblue", color:'white'}}>
            <h1>React Material UI | Container | maxWidth="md"</h1>
        </Container>

        <Container maxWidth="lg" sx={{bgcolor:"skyblue", color:'white'}}>
            <h1>React Material UI | Container | maxWidth="lg"</h1>
        </Container>

        {/* <Container fixed sx={{bgcolor:"red", color:'white'}}>
            <h1>React Material UI | Container | Fixed</h1>
        </Container> */}
    </div>
  )
}

export default MyContainer