import React from "react";
import s from './dialogs.module.css';
import Contact from "./contact/Contact";
import Message from "./messages/Message";
import { addMessageActionCreate, updateNewMessageActionCreate} from './../../redux/dialogPage-reduser';



const Dialogs = (props) => {


    let contactElement = props.state.contact.map(u => <Contact name={u.name} id={u.id} />);


    let messageElement = props.state.message.map(m => <Message name={m.name} text={m.text} />);

    let newMessage = React.createRef();
    let sendText = () => {
        props.distpatch(addMessageActionCreate("Me"));
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.distpatch(updateNewMessageActionCreate(text));
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

                <form className={s.message__enter}>
                    <textarea onChange={onMessageChange} ref={newMessage} value={props.state.newTextMessage} className={s.message__text}/>

                    <button onClick={sendText} className={s.message__btn} type="button">Send</button>
                </form>
            </div>

        </div>


    )
}

export default Dialogs;