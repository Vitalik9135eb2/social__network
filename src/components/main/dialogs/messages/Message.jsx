import React from "react";
import s from './message.module.css';
import avatar from './../../../../img/avatar__message.png'


const Message = (props) => {

    let classNameMessageRow = props.name === "Me" ? s.message__wrap_rewerse : s.message__wrap 

        return (

        <div className={classNameMessageRow}>
            <div className={s.user}>
                <img className={s.avatar} src={avatar} alt="" />
                <span className={s.user__name}>{props.name}</span>
            </div>

            <div className={s.message}>
                <p className={s.message__text}>{props.text}</p>
            </div>

        </div>

    )
}

export default Message;