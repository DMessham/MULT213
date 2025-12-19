import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';//
import TransferWithinAStationRoundedIcon from '@mui/icons-material/TransferWithinAStationRounded';

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Badge from '@mui/material/Badge';
import StopList from './stoplist';

export default function RouteListItem(props) {

    //so i can use some text
    const secondary = (props.content ? props.content : 'not available')

    const subtitle = (props.subtitle ? props.subtitle : null)

    const primary = (props.title ? props.title : 'Route Name ERROR')

    const avicolor = (props.bgColor ? `{{ width: 24, height: 24, avicolor,backgroundColor: ${props.bgColor}, color: ${props.fgColor}}}` : '{{ width: 24, height: 24, avicolor}}')

    const short = (props.image ? <avatar src={props.image} sx={avicolor} /> : props.number ? <Badge badgeContent={props.number} color="secondary" overlap="circular" ><Avatar variant="rounded" ><DirectionsBusRoundedIcon></DirectionsBusRoundedIcon></Avatar></Badge> : <Avatar variant="rounded"><DirectionsBusRoundedIcon></DirectionsBusRoundedIcon></Avatar>)

    const actionElement = (props.action ? <>{props.action}</> : null)

    const stoparray = (props.route_stops ? props.route_stops : {stops:[
    {
      id: 101,
      stop_name: 'Meadows BLVD/Rosewood Gate N',
      stop_id: "2 minutes from Home",
    },
    {
      id: 102,
      stop_name: 'Idylwyld/32nd Street',
      stop_id: `1 Minute from school`,
    },
    {
      id: 103,
      stop_name: 'Taylor/Rosewood Gate N',
      stop_id: "5 minutes from Home",
    },
    {
      id: 104,
      stop_name: 'Idylwyld/33rd Street',
      stop_id: `4 Minutes from school`,
    },
  ]})

    // dropdown to show advanced info

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    
    return (<>
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
          <StopList stops={stoparray}/>
        </List>
      </Collapse>
</>)}