import React from "react";
import s from './home.module.css';
import HomeBtns from "./home__btns-block/HomeBtns";
import HomeContentContainer from "./home__content/HomeContentContainer";
import HomePicture from "./home__picture/HomePicture";

const Home = (props) => {

    

    return (
        <div className={s.home}>

            <HomePicture/>

            <HomeBtns/>

            <HomeContentContainer/>

        </div>


    )
}

export default Home;