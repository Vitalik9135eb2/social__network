import React from "react";
import iconFB from './../../img/facebook_icon-icons.com_53612.png';
import s from './header.module.css';

const Header = () =>{
    return(
        <header className={s.header}>
            <div className='container'>
                <div className={s.inner}>
                    <a className={s.logo} href='#'>
                        <img className={s.img} src={iconFB} alt='Facebook'/>
                    </a>
                    <input className={s.search} type="text" placeholder="Search Facebook"/>
                </div>
            </div>
        </header>
    )
}

export default Header;