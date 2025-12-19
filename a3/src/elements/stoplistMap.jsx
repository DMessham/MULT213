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


export default function StopListMap(props) {
    console.log("creatng stoplist map", props)
    const mapElement = (props.mapimg ? <><img src={mapimg}></img></> : <><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuX43a-udPTMZ515YqpVQhb8ZVI-cziDZvZA&s"></img></>)
    return(
        <>
            <p>map goes here</p>
        </>
    )
}