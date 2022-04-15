import React from "react";
import s from './homeContent.module.css';
import LeftContentContainer from "./left/LeftContentContainer";
import RightContent from "./right/RightContent";

const HomeContent = (props) => {
    
    return (

        <div className={s.home__content}>
            {/* <LeftContent homePage={props.homePage} dispatch={props.dispatch}/> */}

            <LeftContentContainer store={props.store} />

            <RightContent />
        </div>


    )
}

export default HomeContent;