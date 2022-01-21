import React from "react";
import s from './homeBtns.module.css';

const HomeBtns = () => {
    return (

        <div className={s.home__btnWrap}>

            <div className={s.home__btns}>
                <button className={s.home__btn}>Like</button>
                <button className={s.home__btn}>Follow</button>
                <button className={s.home__btn}>Share</button>
                <button className={s.home__btn}>More</button>
            </div>

            <button className={s.home__btn}>Message</button>
        </div>

    )
}

export default HomeBtns;