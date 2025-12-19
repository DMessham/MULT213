import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import RouteListItem from './routeListItem'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';//
import TransferWithinAStationRoundedIcon from '@mui/icons-material/TransferWithinAStationRounded';

import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Badge from '@mui/material/Badge';
import StopList from './stoplist';
// get data from api and feed it in
  let favCount = 0;
export default function routelist(props){
  console.log("routelist begin",props.props)
  
  let newData = [{primary:"No Results"}]

  try{
    if (props.length <= 1) {
      console.log(`No results found.`);
      return (
        <>
        <Paper square sx={{ pb: '50px' }}>
            <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
            Bus routes
            </Typography>
            <List sx={{ mb: 2 }}>
                <React.Fragment key={id}>
                <RouteListItem title="No Results" content="try searching something else" bgColor="001100" fgColor="aaffaa" number="" short="" stops={[{stop_name:"no data", id:0, stop_id:""}]} />
                </React.Fragment>
            </List>
        </Paper>
        
      <CssBaseline />
        </>
      )}
    else{
      let stops= []
      let output= ""
      // console.log(`Routelist: Found ${props.props.length} result(s):`, props.props);
      for (let row=0; row<props.props.length; row++) {
        let item = props.props[row]
        // stops[row]=fetchRouteStops(item.onestop_id);
        //because the routes list is special, and its only used here, it isnt broken out into a function in dom.js like stops are
        //route color doesnt seem to match saskatoon transit's offical app, it might be from the routemap pdf
        const agency_info = item.agency
        const agency_name = agency_info.agency_name //dont use anything else from transit info right now
        // console.log(`RouteINFO: ${item.route_short_name}`,`${item.route_long_name}`,`${agency_name}`,`${item.onestop_id}`, item.route_stops)

        newData[row] = {
            'short':item.route_short_name,
            'primary':item.route_long_name,
            'agency':agency_name,
            'secondary':item.onestop_id,
            'id':item.route_id,
            'bgColor':item.route_color,
            'fgColor':item.route_text_color,
            'stops': stops[row],
        }
      // console.log("Processed routelist data",newData, "from", props)
      }
      const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);

    };
      return (
          <>
          <Paper square sx={{ pb: '50px' }}>
              <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
              Bus routes
              </Typography>
              <List sx={{ mb: 2 }}>
              {newData.map(({ id, primary, secondary, short, agency, bgColor, fgColor, stops }) => (
                  <React.Fragment key={id}>
                  <ListItemButton onClick={handleClick} selected={open}>
                      <ListItemAvatar>
                          {short}
                      </ListItemAvatar>
                      <ListItemText primary={primary} secondary={secondary} />
                      {open ? "Hide Stops" : "Show Stops"}
                      {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" dense>
                        <StopList stops={stops} type="routelist"/>
                      </List>
                    </Collapse>
                  </React.Fragment>
              ))}
              </List>
          </Paper>
          
        <CssBaseline />
          </>
      )
    }
  }
  catch(error){
    console.log(`routelist error:`, error)
    let id=Math.random(200,500)
    return (
      <>
      <Paper square sx={{ pb: '50px' }}>
          <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
          Bus routes
          </Typography>
          <List sx={{ mb: 2 }}>
              <React.Fragment key={id}>
              <RouteListItem title="No Results" content="try searching something else" bgColor="001100" fgColor="aaffaa" number="" short="" stops={[{stop_name:"no data", id:0, stop_id:"", }]} type="routelist" />
              </React.Fragment>
          </List>
      </Paper>
      
    <CssBaseline />
      </>
    )}
  }
