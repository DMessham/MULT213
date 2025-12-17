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


// get data from api and feed it in

const input = [
    {
      id: 1,
      primary: 'Meadows BLVD/Rosewood Gate N',
      secondary: "2 minutes from Home",
    },
    {
      id: 2,
      primary: 'Idylwyld/32nd Street',
      secondary: `1 Minute from school`,
    },
    {
      id: 3,
      primary: 'Taylor/Rosewood Gate N',
      secondary: "5 minutes from Home",
    },
    {
      id: 4,
      primary: 'Idylwyld/33rd Street',
      secondary: `4 Minutes from school`,
    },
  ];

  let favCount = 3;


export default function StopList(){
    return (
        <>
        <Paper square sx={{ pb: '50px' }}>
            <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
            Bus Stops
            </Typography>
            <List sx={{ mb: 2 }}>
            {input.map(({ id, primary, secondary }) => (
                <React.Fragment key={id}>
                {id === 1 && (
                    <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                    Favorites
                    </ListSubheader>
                )}
                {id === favCount+1 && (
                    <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                    Nearby
                    </ListSubheader>
                )}
                <ListItemButton>
                    <ListItemAvatar>
                    <Avatar>N</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={primary} secondary={secondary} />
                </ListItemButton>
                </React.Fragment>
            ))}
            </List>
        </Paper>
        
      <CssBaseline />
        </>
    )
}