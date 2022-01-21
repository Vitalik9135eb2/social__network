import React from "react";
import s from './homeContent.module.css';
import LeftContent from "./left/LeftContent";
import RightContent from "./right/RightContent";

const HomeContent = () => {
    return (

        <div className={s.home__content}>
            <LeftContent/>
            <RightContent/>
        </div>


    )
}

export default HomeContent;