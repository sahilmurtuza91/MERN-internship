import { Box } from '@mui/material'
import React from 'react'

function MyBox() {
  return (
    <div>
        <Box component="section" sx={{
            p:2, 
            border:'1px solid grey', 
            borderRadius:2, 
            bgcolor:"background.default", 
            color:"red"
            }}
            >
            This Box renders as an HTML section element
        </Box>
    </div>
  )
}

export default MyBox

