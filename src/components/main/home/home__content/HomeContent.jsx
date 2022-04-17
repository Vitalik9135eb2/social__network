import React from "react";
import s from './homeContent.module.css';
import LeftContentContainer from "./left/LeftContentContainer";
import RightContent from "./right/RightContent";

const HomeContent = (props) => {
    
    return (

        <div className={s.home__content}>
            <LeftContentContainer  />

            <RightContent />
        </div>


    )
}

export default HomeContent;