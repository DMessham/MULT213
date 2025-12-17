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

    const short = (props.image ? <avatar src={props.image} sx={{ width: 24, height: 24 }} /> : props.number ? <Avatar variant="rounded">{props.number}</Avatar> : <Avatar variant="rounded"><TransferWithinAStationRoundedIcon/></Avatar>)

    const actionElement = (props.action ? <>{props.action}</> : null)

    // dropdown to show advanced info

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    
    return (<>
    <ListItemButton onClick={handleClick} selected={open}>
      <ListItem inset>
        <ListItemAvatar>
        {short}
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} />
        {open ? "Info" : "More Info"}
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
    </ListItemButton>

    
    <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding dense>
          
          <ListItemButton sx={{ pl: 4 }}>
            <ListItem inset>
              <ListItemIcon>
                <TransferWithinAStationRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="info" secondary="moreinfo" />
              arrival time
            </ListItem>
          </ListItemButton>
        </List>
      </Collapse>
</>)}