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
import Routelist from './elements/routelist'
import StopList from './elements/stoplist';

import TextField from '@mui/material/TextField';

import { fetchStopsLocation, fetchRouteStops, searchRoutes, searchStops, fetchAreaImage} from "./api.js";

function App() {
  const [count, setCount] = useState(0)

    // Define the routeSearch models
  const [routeSearchs, setrouteSearchs] = useState([]);

  // Define the stopSearch models
  const [stopSearchs, setstopSearchs] = useState([]);

  // Define the stopSearch models
  const [getLocation, setlocation] = useState([]);


  // Set up add new routeSearch form handler
  const handleRouteFormSubmit = async (formData) => {
    const titleField = formData.get('title');
    console.log(`Handling new routeSearch: ${titleField}`);
    // call the func from api
    const data = await searchRoutes(titleField);
    // We call the React hook to update the application state
    setrouteSearchs(data.routes);
  };

    // Set up add new stopSearch form handler
  const handleStopFormSubmit = async (formData) => {
    const titleField = formData.get('title');
    console.log(`Handling new stopSearch: ${titleField}`);

    // Make new stopSearch model
    const newstopSearch = {
      name: titleField
    };

    const data = await searchStops(titleField);

    // We need to make a new list, otherwise React will not update
    const newstopSearchs = [...stopSearchs, newstopSearch];

    // We call the React hook to update the application state
    setstopSearchs(newstopSearchs);
  };

  //current Location Button Logic
  let latitude = 0.0
  let longitude = 0.0
  const getLocationButton = async () => {
    console.log(`getting location`)
    
    const radius = 250
    // based off https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
    if ("geolocation" in navigator) {
        let nav = navigator.geolocation
        /* geolocation is available */
        nav.getCurrentPosition(async (position) =>{
            latitude = position.coords.latitude
            longitude = position.coords.longitude
            console.log(`latitude is`, latitude, `longitude is`, longitude)
            // at this point, not loading anymore
            
            console.log(`Looking for stops within ${radius}m of ${latitude}, ${longitude}:`);
            let data = await fetchStopsLocation(latitude, longitude, radius);
            // console.log("Getting map…");
            // let img = await fetchAreaImage(latitude, longitude, radius);
            
            try {
                //check if there is any data and display it
                if (data.length === 0) {
                    console.log(`ErrorNo results found within ${radius}m`);
                    return;
                } else {
                    let message = `Found ${data.length} result(s) within ${radius}m of ${latitude}, ${longitude}:`;
                    message += (data) // need to format it into a mui list
                
                    console.log(message);
                }
                return(latitude, longitude)
                
            } catch (err) {
                console.log("error in nearby stops:", err.message, err)
            }
        });
    } else {    
        /* geolocation IS NOT available */
        
        console.log(`Error: Location not available from browser, it may be disabled or not supported`);
    }    
  };

  return (
    <>
    
    <ThemeProvider theme={theme}>
      
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            TransitTrac
          </Typography>
          <div>
          <form id="routeSearch-form" action={handleRouteFormSubmit}>
            <TextField 
              label="Search for routes" variant="standard" 
              className="routeSearch-form__input"
                id="routeSearch-input" name="title"
                type="text" placeholder="name"
                autoComplete="off" required
            />
              <Button variant="contained" className="routeSearch-form__button" type="submit">Search</Button>
            </form>
            <Routelist props={routeSearchs} ></Routelist>
          </div>
          <div>
          <form id="stopSearch-form" action={handleStopFormSubmit}>
            <TextField 
                label="Search for Stops" variant="standard" 
                className="stopSearch-form__input" id="stopSearch-input"
                name="title" type="text"
                placeholder="name" autoComplete="off"
              />
              <Button variant="contained" className="stopSearch-form__button" type="submit">Search</Button>
              
            <Button variant="outlined" onClick={getLocationButton}>Near me</Button>
            </form>
            
            {/* <StopList props={stopSearchs}></StopList> */}
          </div>
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
