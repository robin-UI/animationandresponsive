// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
// import Home from './Home/Home'
import { lightTheme } from './theme'
import Pricing from './Pricing/Pricing'

function App() {


  return (
    <>        
    <ThemeProvider
      theme={lightTheme}
    >
      <CssBaseline />
      {/* <Home/> */}
      <Pricing />
    </ThemeProvider>
    </>
  )
}

export default App
