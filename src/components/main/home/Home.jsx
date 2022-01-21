import React from "react";
import s from './home.module.css';
import HomeBtns from "./home__btns-block/HomeBtns";
import HomeContent from "./home__content/HomeContent";
import HomePicture from "./home__picture/HomePicture";

const Home = () => {
    return (
        <div className={s.home}>

            <HomePicture/>

            <HomeBtns/>

            <HomeContent/>

        </div>


    )
}

export default Home;