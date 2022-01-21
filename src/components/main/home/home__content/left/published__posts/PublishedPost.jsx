import React from "react";
import s from './publishedPost.module.css';
import avatar1 from './../../../../../../img/avatar__post/free-icon-man-1184457.png';
import avatar2 from './../../../../../../img/avatar__post/premium-icon-avatar-2633303.png';

const PublishedPost = (props) => {
    return (


        <div className={s.published__post}>

            <img className={s.avatar} src={avatar1} alt="" />

            <p className={s.text}>{props.message}</p>

            <button className={s.btn}>like {props.currentLikes}</button>

        </div>



    )
}

export default PublishedPost;