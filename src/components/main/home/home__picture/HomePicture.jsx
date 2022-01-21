import React from "react";
import bgHome from './../../../../img/railroad-g491e87643_640.jpg';
import s from './homePicture.module.css';

const HomePicture = () => {
    return (

        <div className={s.home__imgWrap}>
            <img className={s.home__img} src={bgHome} />
        </div>

            
    )
}

export default HomePicture;