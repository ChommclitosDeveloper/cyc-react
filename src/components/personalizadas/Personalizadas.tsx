import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import React from 'react'

const Personalizadas = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Box sx={{ m:1, boxShadow:3, borderRadius:2, p:1, bgcolor:'#add5fa' }}>Recetas Personalizadas</Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Personalizadas