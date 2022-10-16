import React from 'react';
import * as url from "url";
import style from './Message.module.css';

type MessagePropsType = {
    // @ts-ignore
    avatar: url
    name: string
    message: string
    time: string
};

export function Message(props: MessagePropsType) {
    return (
        <div className={style.container}>
            <img src={props.avatar} alt='avatar' className={style.avatar}/>
            <div className={style.messageCont}>
                <h1 className={style.name}> {props.name} </h1>
                <div className={style.message}> {props.message} </div>
                <div className={style.time}> {props.time} </div>
            </div>
        </div>
    )
}