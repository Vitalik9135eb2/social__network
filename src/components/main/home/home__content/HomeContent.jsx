import React from "react";
import s from './homeContent.module.css';
import LeftContent from "./left/LeftContent";
import RightContent from "./right/RightContent";

const HomeContent = (props) => {
    return (

        <div className={s.home__content}>
            <LeftContent homePage={props.homePage} addPostNew={props.addPostNew} updateNewPost={props.updateNewPost}/>
            <RightContent/>
        </div>


    )
}

export default HomeContent;