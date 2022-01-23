import React from "react";
import s from './contact.module.css';
import { NavLink } from "react-router-dom";


const Contact = (prpos) => {

    let path = '/dialogs/' + prpos.id;

    return (

        <li className={s.contact__item}>
            <NavLink className={s.contact__link} to={path}>{prpos.name}</NavLink>
        </li>

    )
}

export default Contact;