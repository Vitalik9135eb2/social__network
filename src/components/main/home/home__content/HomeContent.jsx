import React from "react";
import s from './homeContent.module.css';
import LeftContent from "./left/LeftContent";
import RightContent from "./right/RightContent";

const HomeContent = (props) => {
    return (

        <div className={s.home__content}>
            <LeftContent messagePost={props.messagePost}/>
            <RightContent/>
        </div>


    )
}

export default HomeContent;