import {  authAPI } from "../../api/api";
import {stopSubmit} from "redux-form";



const Set__User__Data = "Set__User__Data";

const SET__PRELOADER = "Set__Users__Preloader"

let initionalState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

    userPreloader: false,

}

const usersPageReduser = (state = initionalState, action) => {
    
    switch(action.type){

        case Set__User__Data:
            return {
                ...state, 
                ...action.payload,
            }

        
        case SET__PRELOADER:
            return{
                ...state,
                userPreloader: action.preloaderState
            }

        default:
            return state;
    } 

}

export const authSetUserData = (userId, email, login, isAuth) => {
    return {
        type: Set__User__Data,
        payload: {userId, email, login, isAuth}
    }
}

export const setUsersPreloader = (preloaderState) =>{
    return{
        type: SET__PRELOADER,
        preloaderState
    }
}

export const usersDataLoginThunk = () => {

    return (dispatch) => {
        dispatch(setUsersPreloader(true))
        
        return authAPI.usersLogin().then(data => {

            if(data.resultCode === 0){

                let {id, email, login} = data.data
                dispatch(authSetUserData(id, email, login, true))
            }

            dispatch(setUsersPreloader(false))

        })
    }
}

export const loginThunk = (email, password, rememberme) => (dispatch) => {

    authAPI.login(email,password,rememberme).then(data => {

        if(data.resultCode === 0){

            dispatch(usersDataLoginThunk())
        } else { 
                        
            dispatch( (stopSubmit ("login", {_error: "error"} ) )  )
        }


    })
}

export const logoutThunk = () => (dispatch) => {

    authAPI.logout().then(data => {

        if(data.resultCode === 0){

            dispatch(authSetUserData(null, null, null, false))
        }


    })
}


export default usersPageReduser;