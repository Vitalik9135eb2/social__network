import React from "react";
import s from './dialogs.module.css';
import Contact from "./contact/Contact";
import Message from "./messages/Message";
import { addMessageActionCreate, updateNewMessageActionCreate } from './../../redux/dialogPage-reduser';
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form"




const dialogsForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit} className={s.message__enter}>
            <Field component="textarea" name="newMessageInput" className={s.message__text} />

            <button className={s.message__btn} >Send</button>
        </form>
    )
}

const ReduxDialogsForm = reduxForm({ form: "dialogs" })(dialogsForm)


const Dialogs = (props) => {


    let contactElement = props.dialogPage.contact.map(u => <Contact name={u.name} key={u.id} id={u.id} />);

    let messageElement = props.dialogPage.message.map(m => <Message name={m.name} key={m.id} text={m.text} />);


    const newMessageDialogs = (value) =>{
        let me = "Me"
        props.addMessage(value.newMessageInput, me)
    }
    
    return (
        <div className={s.dialogs}>

            <div className={s.contact}>

                <h2 className={s.contact__title}>Dialogs</h2>

                <ul className={s.contact__list}>
                    {contactElement}
                </ul>

            </div>


            <div className={s.messages__wrap}>
                <div className={s.message}>
                    {messageElement}
                </div>

                <ReduxDialogsForm onSubmit={newMessageDialogs}/>
            </div>

        </div>

    )
}

export default Dialogs;