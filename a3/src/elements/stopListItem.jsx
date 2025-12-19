import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import TransferWithinAStationRoundedIcon from '@mui/icons-material/TransferWithinAStationRounded';

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ListItem } from '@mui/material';

export default function StopListItem(props) {

    //so i can use some text
    const secondary = (props.content ? props.content : (props.text ? props.text : 'Location not available') )

    const subtitleElement = (props.subtitle ? props.subtitle : null)

    const primary = (props.title ? props.title : 'Stop Name ERROR')

    const actionElement = (props.action ? <>{props.action}</> : null)
    
    const mapElement = (props.mapimg ? <><img src={mapimg}></img></> : null)

    // dropdown to show advanced info

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    
    return (<>
    <ListItemButton onClick={handleClick} selected={open}>
      <ListItem inset>
        <ListItemAvatar>
          {TransferWithinAStationRoundedIcon}
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} />
        {open ? "Hide Map" : "Show Map"}
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
    </ListItemButton>

    
    <Collapse in={open} timeout="auto" unmountOnExit>
      map goes here
      {mapElement}
        {/* <List component="div" disablePadding dense>
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItem inset>
              <ListItemIcon>
                test
              </ListItemIcon>
              Not implemented
            </ListItem>
          </ListItemButton>
        </List> */}
      </Collapse>
</>)}