import { profileAPI, usersAPI } from './../../api/api';


const Add_Post = "Add-Post";
const SET__USER_PROFILE = "SET__USER_PROFILE";
const SET__USER_STATUS = "SET__USER_STATUS";


let initionalState = {
    messagePost: [
        {id: 1, message: "How are you?", currentLikes: 10},
        {id: 2, message: "My first posts!", currentLikes: 255},
    ],

    profile: null,

    status: "",
}

const homePageReduser = (state = initionalState, action) => {
    
    switch(action.type){
        case Add_Post:{

            let newPost = {id: state.messagePost.length + 1, message: action.newPostInput, currentLikes: 0};

            return{
                ...state,
                messagePost:[...state.messagePost, newPost],
            }
        }

        case SET__USER_PROFILE:
            return{
                ...state,
                profile: action.profile
            }

        case SET__USER_STATUS:
            return{
                ...state,
                status: action.status
            }
        
        default:
            return state;
    } 
}

export const addPost = (newPostInput)=>{
    return {
        type: Add_Post,
        newPostInput
    }
}

export const setUserProfile = (profile) =>{
    return{
        type: SET__USER_PROFILE, profile
    }
}

export const setUsersStatus = (status) => {
    return{
        type: SET__USER_STATUS, status
    }
}

export const getProfileUserThunk = (userId) => {

    return (dispatch) => {
            usersAPI.getProfileUsers(userId).then(data => {

            dispatch(setUserProfile(data))
            // this.props.setUsersPreloader(false)

        })
    }

}

export const getUsersStatusThunk = (userId) => {

    return(dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUsersStatus(data))
        })
    }
}

export const updateUsersStatusThunk = (status) => {

    return(dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0){
            dispatch(setUsersStatus(status))

            }
        })
    }
}



export default homePageReduser;