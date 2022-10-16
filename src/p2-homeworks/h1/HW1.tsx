import React from 'react'
import {Message} from "./Message";
import style from './Message.module.css';

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Admin',
    message: 'Hi! How are you?',
    time: '22:00',
}

function HW1() {
    return (
        <div className={style.block}>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1;