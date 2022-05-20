import React from "react";
import { connect } from "react-redux";
import { addMessage} from './../../redux/dialogPage-reduser';
import Dialogs from "./Dialogs";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";



let mapStateToProps = (state) => {

    return{
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)
(Dialogs)

