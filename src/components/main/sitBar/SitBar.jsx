import React from "react";
import avatar from './../../../img/—Pngtree—vector male student icon_4255019.png';
import s from './sitBar.module.css';

const SitBar = () =>{
    return(
        <aside className={s.navbar}>
            <div className={s.navbar__inner}>

                <div className={s.profile}>
                    <img className={s.profile__img} src={avatar}/>
                </div>

                <div className={s.profile__info}>
                    <span className={s.profile__name}>Vitalii</span>
                    <span className={s.profile__email}>05vp94@mail.ru</span>
                </div>

                <ul className={s.navbar__list}>
                    <li className={s.navbar__item}>
                        <a className={s.navbar__link} href='#'>Home</a>
                    </li>

                    <li className={s.navbar__item}>
                        <a className={s.navbar__link} href='#'>About</a>
                    </li>

                    <li className={s.navbar__item}>
                        <a className={s.navbar__link} href='#'>Photos</a>
                    </li>

                    <li className={s.navbar__item}>
                        <a className={s.navbar__link} href='#'>Dialogs</a>
                    </li>

                    <li className={s.navbar__item}>
                        <a className={s.navbar__link} href='#'>Posts</a>
                    </li>
                </ul>

                <button className={s.navbar__btn}>Create a Page</button>

            </div>

        </aside>


    )
}

export default SitBar;