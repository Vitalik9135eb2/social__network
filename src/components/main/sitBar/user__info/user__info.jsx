import React from "react";
import s from './user__info.module.css';




const User = (props) => {
    return (

        <div className={s.profile__info}>
            <span className={s.profile__name}>{props.name}</span>
            <span className={s.profile__email}>{props.email}</span>
        </div>


    )
}

export default User;