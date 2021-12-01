import React from 'react'
import './style.css'
import { Avatar } from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header"></div>
            <Avatar />
            <div className="sidebar__headerRight">
                <DonutLargeIcon />
                <ChatIcon />
                <MoreVertIcon />
            </div>
            <div className="sidebar__search"></div>
            <div className="sidebar__chat"></div>
        </div>
    )
}

export default Sidebar
