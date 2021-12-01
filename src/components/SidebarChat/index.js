import React from 'react'
import './style.css'
import { Avatar } from '@mui/material'

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidbarChat__info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat
