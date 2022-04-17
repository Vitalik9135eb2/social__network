import React from "react";

import LeftContent from "./LeftContent";
import { addPostActionCreate, updateNewPostActionCreate} from '../../../../redux/homePage-reduser';
import { connect } from "react-redux";



let mapStateToProps = (state) => {

    return{
        homePage: state.homePage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () => {
            dispatch(addPostActionCreate())
        },

        onPostChange: (text) => {
            dispatch(updateNewPostActionCreate(text))
        }
    }
}

const LeftContentContainer = connect (mapStateToProps,mapDispatchToProps) (LeftContent);

export default LeftContentContainer;