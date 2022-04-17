import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreate, updateNewMessageActionCreate} from './../../redux/dialogPage-reduser';
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {

    return{
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        sendText: (me) => {
            dispatch(addMessageActionCreate(me))
        },

        onMessageChange: (text) => {
            dispatch(updateNewMessageActionCreate(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;