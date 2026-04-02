import React from "react";
import { Box, Grid } from "@mui/material";
function MyGrid() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item size={{xs:12, sm:6, md:4, lg:3}} >
          <Box sx={{ p: 2, border: "1px solid black" }}>Block 1</Box>
        </Grid>

        <Grid item size={{xs:12, sm:6, md:4, lg:3}}>
          <Box sx={{ p: 2, border: "1px solid black" }}>Block 2</Box>
        </Grid>

        <Grid item size={{xs:12, sm:6, md:4, lg:3}}>
          <Box sx={{ p: 2, border: "1px solid black" }}>Block 3</Box>
        </Grid>

        <Grid item size={{xs:12, sm:6, md:4, lg:3}}>
          <Box sx={{ p: 2, border: "1px solid black" }}>Block 4</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default MyGrid;

// xs-->extra small (mobile)
// sm--> small (tablet)
// md --> medium (small laptop)
// lg --> large (desktop)
// xl --> extra large (big screens)

// increaeing order of the screen
/// xs--> sm --> md --> lg --> xl
