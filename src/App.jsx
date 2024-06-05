// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import Home from './Home/Home'
import { lightTheme } from './theme'

function App() {


  return (
    <>        
    <ThemeProvider
      theme={lightTheme}
    >
      <CssBaseline />
      <Home/>
    </ThemeProvider>
    </>
  )
}

export default App
