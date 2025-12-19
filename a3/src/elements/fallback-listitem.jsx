import * as React from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import TransferWithinAStationRoundedIcon from '@mui/icons-material/TransferWithinAStationRounded';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ListItem } from '@mui/material';

export default function listItem(props) {
  console.log("creatng stoplist item", props)
  try {
    //so i can use some text
    const secondary = (props.content != null ? props.content : (props.text ? props.text : 'bata not available'))

    const primary = (props.title != null ? props.title : 'ERROR')

    const mapElement = (props.mapimg ? <><img src={mapimg}></img></> : null)

    // dropdown to show advanced info

    return (<>
        <ListItem inset>
          <ListItemAvatar>
            {TransferWithinAStationRoundedIcon}
          </ListItemAvatar>
          {/* <ListItemText primary={primary} secondary={secondary} /> */}
          <ListItemText primary={props.primary} secondary={props.secondary} />
          {open ? "Hide Map" : "Show Map"}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
    </>
    )
  }
  catch(error){
    return (<>
        <ListItem inset>
          <ListItemAvatar>
            {TransferWithinAStationRoundedIcon}
          </ListItemAvatar>
          <ListItemText primary="ERROR" secondary="something went wrong" />
        </ListItem>
    </>
    )
  }
}
