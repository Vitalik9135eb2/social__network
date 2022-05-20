import {  authAPI } from "../../api/api";
import {stopSubmit} from "redux-form";
import * as axios from 'axios';

import {usersDataLoginThunk} from "./auth-reduser";




const Set__Initialazed = "Set__Initialazed";


let initionalState = {
    initialized: false,
}

const appReduser = (state = initionalState, action) => {
    
    switch(action.type){

        case Set__Initialazed:
            return {
                ...state, 
                initialized: true
            }

        default:
            return state;
    } 

}

export const setInitialazed = () => {
    return {
        type: Set__Initialazed ,

    }
}

export const initializedAppThunk = () => (dispatch) =>{

    let promis = dispatch(usersDataLoginThunk())

    promis.then(() => {
                dispatch(setInitialazed())
    })

}

export default appReduser;