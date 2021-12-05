import { AttachFile, SearchOutlined } from '@mui/icons-material';
import MoreVert from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from 'react-router-dom';
import './style.css'
import db from '../../firebase';

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        if (roomId) {
            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomName
                    (snapshot.data().name));
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('Yourtyped', input);
        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg `} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at....</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton >
                        <SearchOutlined />
                    </IconButton>
                    <IconButton >
                        <AttachFile />
                    </IconButton>
                    <IconButton >
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">Testing</span>
                    Hello
                    <span className="chat__timeStamp">3:52pm</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        placeholder="Type a message"
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)} />
                    <button
                        onClick={sendMessage}
                        type="submit">Send a message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
