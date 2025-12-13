import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider} from '@mui/material/styles';
import { theme } from './theme';
import ResponsiveDrawer from './elements/drawer';
import BottomAppBar from './elements/bottomBar';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <ThemeProvider theme={theme}>
      
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Vite.js example
          </Typography>
          <div>
          <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          
        </Box>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
      </Container>
      <BottomAppBar></BottomAppBar>
      </ThemeProvider>
    </>
  )
}

export default App
