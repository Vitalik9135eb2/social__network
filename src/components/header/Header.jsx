import React from "react";
import iconFB from './../../img/fb-icon.png';
import s from './header.module.css';
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.inner}>
                    <div className={s.wrap}>
                        <a className={s.logo} href='#'>
                            <img className={s.img} src={iconFB} alt='Facebook' />
                        </a>
                        <input className={s.search} type="text" placeholder="Search Facebook" />
                    </div>

                    <div className={s.login__wrap}>
                        {
                            props.isAuth 
                            ? <div className=""><span>{props.login }</span> <button onClick={props.logoutThunk}>Log out</button></div> 
                            :<NavLink to={"/login"}><span>LogIn</span></NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;