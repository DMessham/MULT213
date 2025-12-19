import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import StopListItem from './stopListItem';

// get data from api and feed it in

export default function StopList(props) {
  console.log("stoplist begin", props)
  let newData = [
    {
      id: 1,
      stop_name: 'Meadows BLVD/Rosewood Gate N',
      stop_id: "2 minutes from Home",
    },
    {
      id: 2,
      stop_name: 'Idylwyld/32nd Street',
      stop_id: `1 Minute from school`,
    },
    {
      id: 3,
      stop_name: 'Taylor/Rosewood Gate N',
      stop_id: "5 minutes from Home",
    },
    {
      id: 4,
      stop_name: 'Idylwyld/33rd Street',
      stop_id: `4 Minutes from school`,
    },
  ]

  try {
    let output = []
    //for when it recieves it as an object with an array
    if (props.stops != null) {
      console.log("stopslist is in object mode", props.stops)
      for (let row = 0; row < props.stops.length; row++) {
        let item = props.stops[row]
        output[row] = {
          title: `${item.stop_name}`,
          content: `Desc:${item.stop_desc}\nOneStopID: ${item.onestop_id}\nStopcode: ${item.stop_code}`,
          number: `${item.id}`,
        }
      }
      
      console.log("Pricessed stoplist data", newData, "from", props, "will output:", output)
      return (
        <>
          <Paper square sx={{ pb: '50px' }}>
            <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
              Bus Stops
            </Typography>
            <List sx={{ mb: 2 }}>
              {/* {output.map(({ title,content,number }) => ( */}
              {output.map(({ title,content,number }) => (
                <React.Fragment key={number}>
                  <StopListItem title={title} content={content} type="stoplist" />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </>
      )
    }
    else {
      //for when it is recieved as a plain array
      console.log("stoplist is in array mode", props)
      for (let row = 0; row < props.length; row++) {
        for (let row = 0; row < props.stops.length; row++) {
          let item = props.stops[row]
          output[row] = {
            title: `${item.stop_name}`,
            content: `Desc:${item.stop_desc}\nOneStopID: ${item.onestop_id}\nStopcode: ${item.stop_code}`,
            number: `${item.id}`,
            img:`${item.onestop_id}`,
          }
        }
        let item = newData[row].stop

        output += (<>
          <React.Fragment key={row}>
            <StopListItem title={item.stop_name} content={item.stop_id} number={item.id} img={item.img} />
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
                {output.map(({ id, primary, secondary, img }) => (
                  <React.Fragment key={id}>
                    <StopListItem title={primary} content={secondary} number={id} mapimg={img} />
                  </React.Fragment>
                ))}
                {output}
              </List>
            </Paper>

            <CssBaseline />
          </>
        )
      }
    }
  } catch (err) {
    //so the app doent break
    console.log(`stoplist error`, err);
    return (
      <>
        <Paper square sx={{ pb: '50px' }}>
          <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
            stops
          </Typography>
        </Paper>
      </>
    )
  }




}