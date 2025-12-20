import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

import Avatar from '@mui/material/Avatar';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';//

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Badge from '@mui/material/Badge';
import StopList from './stoplist';


import { fetchRouteStops } from '../api';

export default function RouteListItem(props) {

    //so i can use some text
    const secondary = (props.content ? props.content : 'not available')

    const subtitle = (props.subtitle ? props.subtitle : null)

    const primary = (props.title ? props.title : 'Route Name ERROR')

    const avicolor = (props.bgColor ? `{{ width: 24, height: 24, avicolor,backgroundColor: ${props.bgColor}, color: ${props.fgColor}}}` : '{{ width: 24, height: 24, avicolor}}')

    const short = (props.number ? <Badge badgeContent={<DirectionsBusRoundedIcon></DirectionsBusRoundedIcon>} color="secondary" ><Avatar variant="rounded" >{props.number}</Avatar></Badge> : <Avatar variant="rounded"><DirectionsBusRoundedIcon></DirectionsBusRoundedIcon></Avatar>)

    
    return (<>
        <ListItemAvatar>
            {short}
        </ListItemAvatar>
        <ListItemText primary={primary} secondary={secondary} />
</>)}