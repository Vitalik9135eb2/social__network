import React from "react";
import s from './dialogs.module.css';
import Contact from "./contact/Contact";
import Message from "./messages/Message";


const Dialogs = (props) => {

    
    let contactElement = props.state.contact.map( u => <Contact name={u.name} id={u.id}/>)

    
    let messageElement = props.state.message.map( m => <Message name={m.name} text={m.text}/>)

    return (
        <div className={s.dialogs}>

            <div className={s.contact}>

                <h2 className={s.contact__title}>Dialogs</h2>

                <ul className={s.contact__list}>
                    {contactElement}
                </ul>

            </div>


            <div className={s.messages}>    
                {messageElement}
            </div>

        </div>


    )
}

export default Dialogs;