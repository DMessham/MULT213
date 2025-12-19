import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import StopListItem from './stopListItem';

// get data from api and feed it in

export default function StopList(props) {

  let newData = {
    stops: [
      {
        stop: {
          id: 1,
          stop_name: 'Meadows BLVD/Rosewood Gate N',
          stop_id: "2 minutes from Home",
        }
      },
      {
        stop: {
          id: 2,
          stop_name: 'Idylwyld/32nd Street',
          stop_id: `1 Minute from school`,
        }
      },
      {
        stop: {
          id: 3,
          stop_name: 'Taylor/Rosewood Gate N',
          stop_id: "5 minutes from Home",
        }
      },
      {
        stop: {
          id: 4,
          stop_name: 'Idylwyld/33rd Street',
          stop_id: `4 Minutes from school`,
        }
      },
    ]
  };

  try {
    console.log(`Stoplist:`, {...props});
    let output = ""
    if(props.type == "routelist"){
      for (let row = 0; row < stops.length; row++) {
        let item = stops[row].stop
        // console.log(`preparing table item`, item)
        //because the routes list is special, and its only used here, it isnt broken out into a function in dom.js like stops are
        //route color doesnt seem to match saskatoon transit's offical app, it might be from the routemap pdf
        newData[row] = {
          'primary': `${item.stop_name}`,
          'agency': `${item.id}`,
          'secondary': `${item.stop_id}`,
          'id': `${item.id}`,
        }

        output += (<>
          <React.Fragment key={row}>
            <StopListItem title={item.stop_name} content={item.stop_id} number={item.id} />
          </React.Fragment>
        </>)
        console.log("Pricessed stoplist data", newData, "from", props)
          return (
            <>
              <Paper square sx={{ pb: '50px' }}>
                <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                  stops
                </Typography>
                <List sx={{ mb: 2 }}>
                  {/* {newData.map(({ id, primary, secondary}) => (
                    <React.Fragment key={id}>
                    <StopListItem title={primary} content={secondary} number={id} />
                    </React.Fragment>
                ))} */}
                  {output}
                </List>
              </Paper>
    
              <CssBaseline />
            </>
          )
      }
    }
    else if(props.stops == null){
      for (let row = 0; row < props.stops.length; row++) {
        let item = props.stops[row].stop
        // console.log(`preparing table item`, item)
        //because the routes list is special, and its only used here, it isnt broken out into a function in dom.js like stops are
        //route color doesnt seem to match saskatoon transit's offical app, it might be from the routemap pdf
        newData[row] = {
          'primary': `${item.stop_name}`,
          'agency': `${item.id}`,
          'secondary': `${item.stop_id}`,
          'id': `${item.id}`,
        }

        output += (<>
          <React.Fragment key={row}>
            <StopListItem title={item.stop_name} content={item.stop_id} number={item.id} />
          </React.Fragment>
        </>)
        console.log("Pricessed stoplist data", newData, "from", props)
          return (
            <>
              <Paper square sx={{ pb: '50px' }}>
                <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                  stops
                </Typography>
                <List sx={{ mb: 2 }}>
                  {/* {newData.map(({ id, primary, secondary}) => (
                    <React.Fragment key={id}>
                    <StopListItem title={primary} content={secondary} number={id} />
                    </React.Fragment>
                ))} */}
                  {output}
                </List>
              </Paper>
    
              <CssBaseline />
            </>
          )
      }
    }
    else {
      console.log("Pricessed stoplist data", newData, "from", props)
      return (
        <>
          <Paper square sx={{ pb: '50px' }}>
            <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
              stops
            </Typography>
            <List sx={{ mb: 2 }}>
              {/* {newData.map(({ id, primary, secondary}) => (
                <React.Fragment key={id}>
                <StopListItem title={primary} content={secondary} number={id} />
                </React.Fragment>
            ))} */}
              {output}
            </List>
          </Paper>

          <CssBaseline />
        </>
      )
    }
  } catch (err) {
    console.log(`stoplist error`, err, "using imput set of", props);
    return (
      <>
        <Paper square sx={{ pb: '50px' }}>
          <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
            stops
          </Typography>
          {/* <List sx={{ mb: 2 }}>
              <StopListItem title="No stops" content="refine your search" number={id + 1} />  
          </List> */}
        </Paper>
      </>
    )
  }




}