import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';


const messages = [
    {
      id: 1,
      primary: 'City Center / 8th street',
      secondary: "Arriving in 5 minutes",
      person: '/static/images/avatar/5.jpg',
    },
    {
      id: 2,
      primary: 'Birthday Gift',
      secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
      person: '/static/images/avatar/1.jpg',
    },
  ];

  let favCount = 3;


export default function routelist(){
    return (
        <>
        <Paper square sx={{ pb: '50px' }}>
            <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
            Bus routes
            </Typography>
            <List sx={{ mb: 2 }}>
            {messages.map(({ id, primary, secondary, person }) => (
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
                    <Avatar alt="Profile Picture" src={person} />
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