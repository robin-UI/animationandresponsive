import { Box, Grid, Paper } from '@mui/material'
import React from 'react'

const Pricing = () => {
  return (
    <div style={{ backgroundColor: "black", height:"100vh" }}>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Paper sx={{
            border: "1px solid #fff",
            borderRadius: "10px",
            // background: "rgb(226,226,226)",
            background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(226,226,226,1) 100%)",
            height: "491px",
            width:  "308px"
          }}></Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper sx={{
            border: "1px soid white",
            borderRadius: "10px",
            // background: "rgb(226,226,226)",--
            background: "linear-gradient(0deg, rgba(226,226,226,1) 0%, rgba(255,255,255,0) 100%)",
            height: "491px",
            width:  "308px"
          }}></Paper>
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Pricing