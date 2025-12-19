import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import RouteListItem from './routeListItem';

// get data from api and feed it in
  let favCount = 0;
export default function routelist(props){
  console.log("stoplist begin",props.props)
  
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
      let output= ""
      console.log(`Found ${props.props.length} result(s):`);
      for (let row=0; row<props.props.length; row++) {
        let item = props.props[row]
        // console.log(`preparing table item`, item)
        //because the routes list is special, and its only used here, it isnt broken out into a function in dom.js like stops are
        //route color doesnt seem to match saskatoon transit's offical app, it might be from the routemap pdf
        const agency_info = item.agency
        const agency_name = agency_info.agency_name //dont use anything else from transit info right now
        console.log(`RouteINFO: ${item.route_short_name}`,`${item.route_long_name}`,`${agency_name}`,`${item.onestop_id}`, item.route_stops)

        newData[row] = {
            'short':item.route_short_name,
            'primary':item.route_long_name,
            'agency':agency_name,
            'secondary':item.onestop_id,
            'id':item.route_id,
            'bgColor':item.route_color,
            'fgColor':item.route_text_color,
            'stops': item.route_stops
        }
      console.log("Processed routelist data",newData, "from", props)
      }
      return (
          <>
          <Paper square sx={{ pb: '50px' }}>
              <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
              Bus routes
              </Typography>
              <List sx={{ mb: 2 }}>
              {newData.map(({ id, primary, secondary, short, agency, bgColor, fgColor, stops }) => (
                  <React.Fragment key={id}>
                  <RouteListItem title={primary} content={agency+" "+secondary} bgColor={bgColor} fgColor={fgColor} number={short} stops={stops} type="routelist" />
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
