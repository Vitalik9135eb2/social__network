import React from "react";
import avatar from './../../../img/—Pngtree—vector male student icon_4255019.png';
import { NavLink } from "react-router-dom";
import s from './sitBar.module.css';
import User from "./user__info/user__info";


const navBarActive = navData => navData.isActive ? s.active__link : s.navbar__link ;

const SitBar = (props) =>{
    

    let userData = props.state.user.map(u => <User name={u.name} email={u.email}/>)

    
    return(
        <aside className={s.navbar}>
            <div className={s.navbar__inner}>

                <div className={s.profile}>
                    <img className={s.profile__img} src={avatar}/>
                </div>

                {userData}

                <ul className={s.navbar__list}>
                    <li className={s.navbar__item}>
                        <NavLink className={navBarActive} to='/home'>Home</NavLink>
                    </li>

                    <li className={s.navbar__item}>
                        <NavLink className={navBarActive} to='/about'>About</NavLink>
                    </li>

                    <li className={s.navbar__item}>
                        <NavLink className={navBarActive} to='/photos'>Photos</NavLink>
                    </li>

                    <li className={s.navbar__item}>
                        <NavLink className={navBarActive} to='/dialogs'>Dialogs</NavLink>
                    </li>

                    <li className={s.navbar__item}>
                        <NavLink className={s.navbar__link} to='/setting'>Setting</NavLink>
                    </li>
                </ul>

                <button className={s.navbar__btn}>Create a Page</button>

            </div>

        </aside>


    )
}

export default SitBar;