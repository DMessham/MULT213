import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import StopListItem from './stopListItem';

// this is a horrible mess, the api for getting a list of stops returns a different format depending on how you ask
// some stops have missing data too
// and mui is weird about how toy can pass data into the list components sometimes just converts the value the part of the object it to the text, displays 'object Object' or breaks entirely with very unhelpfull error messages like that its occuring in a 'div' component within react

export default function StopList(props) {
  console.log("stoplist begin", props)

  //some basic filler data
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
    //for when it recieves data in format of an object with an array called stops
    if (props.stops != null) {
      console.log("stopslist is in object mode", props.stops)
      for (let row = 0; row < props.stops.length; row++) {
        let item = props.stops[row]
        output[row] = {
          title: `${item.stop_name}`,
          content: `OneStopID: ${item.onestop_id}\nStopcode: ${item.stop_code}`,
          number: `${item.id}`,
          img:`${item.onestop_id}`,
        }
      }
      
      console.log("Pricessed stoplist data", newData, "from", props, "will output:", output)
      return (
        <>
          <Paper square sx={{ pb: '50px' }}>
            <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
              Bus Stops (from obj)
            </Typography>
            <List sx={{ mb: 2 }}>
              {/* {output.map(({ title,content,number }) => ( */}
              {output.map(({ title,content,number, img}) => (
                <React.Fragment key={number}>
                  <StopListItem title={title} content={content} type="stoplist" mapimg={img} />
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
          item = props[row];
          output[row] = {
            title: `${item.stop_name}`,
            content: `OneStopID: ${item.onestop_id}\n Stopcode: ${item.stop_code}`,
            number: `${item.id}`,
            img:`${item.onestop_id}`,
          }

          //i honestly have no ide why i have to move beteen arrays like that for it to work
        let item = newData[row].stop

        output += (<>
          <React.Fragment key={row}>
            <StopListItem title={item.stop_name} content={item.stop_id} number={item.id} img={item.img} />
          </React.Fragment>
        </>)
        console.log("Processed stoplist data", newData, "from", props)
        return (
          <>
            <Paper square sx={{ pb: '50px' }}>
              <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                stops from array
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