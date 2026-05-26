import React from 'react'
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
function Footer() {
  return (
        <Box
      sx={{
        mt: "auto",
        py: 2,
        textAlign: "center",
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        color: "white",
      }}
    >
      <Typography variant="default">
        © {new Date().getFullYear()} Athenify. All rights reserved. | Made with ❤️ by Sahil Murtuza
      </Typography>

      <Box sx={{ mt: 1 }}>
        <Link href="#" underline="hover" color="" sx={{ mx: 1 }}>
          Privacy
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={{ mx: 1 }}>
          Terms
        </Link>
        <Link href="#" underline="hover" color="inherit" sx={{ mx: 1 }}>
          Contact
        </Link>
      </Box>
    </Box>
  )
}

export default Footer
