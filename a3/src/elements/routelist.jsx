import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import RouteListItem from './routeListItem';




// get data from api and feed it in
  let favCount = 0;
export default function routelist(props){
  console.log(props)
  
  let newData = [{primary:"No Results", id:0, }]
  if (props.length === 0) {
    console.log(`No results found.`);
  }
  else{
    console.log(`Found ${props.length} result(s):`);
    for (let row=0; row<props.length; row++) {
      let item = props[row]
      console.log(`preparing table item`, item)
      //because the routes list is special, and its only used here, it isnt broken out into a function in dom.js like stops are
      //route color doesnt seem to match saskatoon transit's offical app, it might be from the routemap pdf
      const agency_info = item.agency
      const agency_name = `${agency_info.agency_name}` //dont use anything else from transit info right now
      console.log(`RouteINFO: ${item.route_short_name}`,`${item.route_long_name}`,`${agency_name}`,`${item.onestop_id}`)
      newData[row] = {
          'short':`${item.route_short_name}`,
          'primary':`${item.route_long_name}`,
          'agency':`${agency_name}`,
          'secondary':`${item.onestop_id}`,
          'id':row
      }
    }

  }

  console.log("Pricessed routelist data",newData, "from", props, "mapped to")
  //from https://react.dev/learn/rendering-lists
    return (
        <>
        <Paper square sx={{ pb: '50px' }}>
            <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
            Bus routes
            </Typography>
            <List sx={{ mb: 2 }}>
            {newData.map(({ id, primary, secondary }) => (
                <React.Fragment key={id}>
                <RouteListItem primary={primary} secondary={secondary}></RouteListItem>
                {/* <ListItemButton selected={open}>
                      <ListItemAvatar>
                      <Avatar variant="rounded">num</Avatar>
                      </ListItemAvatar>
                      <RouteListItem primary={primary} secondary={secondary} />
                  </ListItemButton> */}
                </React.Fragment>
            ))}
            </List>
        </Paper>
        
      <CssBaseline />
        </>
    )
}