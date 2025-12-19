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
import StopListMap from './stoplistMap';

export default function StopListItem(props) {
  console.log("creatng stoplist item", props)
  try {
    //so i can use some text
    const secondary = (props.content != null ? props.content : (props.text ? props.text : 'Location not available'))

    const primary = (props.title != null ? props.title : 'Stop Name ERROR')

    

    // dropdown to show advanced info

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

    return (<>
      <ListItemButton onClick={handleClick} selected={open}>
        <ListItem inset>
          <ListItemAvatar>
            {/* {TransferWithinAStationRoundedIcon} */}
          </ListItemAvatar>
          {console.log('making listtext item')}
          <ListItemText primary={primary} secondary={secondary} />
          {/* <ListItemText primary={props.primary} secondary={props.secondary} /> */}
          {open ? "Hide Map" : "Show Map"}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </ListItemButton>


      {console.log('making collapse item')}
      <Collapse in={open} timeout="auto" unmountOnExit>
        {StopListMap("bruh")}
      </Collapse>
    </>
    )
  }
  catch(error){
    return (<>
        <ListItem inset>
          <ListItemAvatar>
            {TransferWithinAStationRoundedIcon}
          </ListItemAvatar>
          
          {console.log('stoplist failed', error)}
          <ListItemText primary="ERROR" secondary="something went wrong" />
        </ListItem>
    </>
    )
  }
}
