import React from "react";
import { addMessageActionCreate, updateNewMessageActionCreate} from './../../redux/dialogPage-reduser';
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {


    let state = props.store.getState()


    let sendText = (me) => {
        props.store.dispatch(addMessageActionCreate(me));
    };

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreate(text));
    }

    return (
        <Dialogs state={state.dialogPage} sendText={sendText} onMessageChange={onMessageChange} />
    )
}

export default DialogsContainer;