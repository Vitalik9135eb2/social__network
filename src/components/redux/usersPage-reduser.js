import { usersAPI } from "../../api/api";



const FOLLOW = "follow";
const UNFOLLOW = "unfollow";
const SET__USERS = "Set__Users";
const SET__PAGE = "Set__Page";
const SET__TOTAL__USER__COUNT = "Set__Total__User__Count";
const SET__PRELOADER = "Set__Users__Preloader";
const SET__PROGRESS = "Set__Follow__Progress";

let initionalState = {
    users: [
        // {id: 1, followed:true, avatar: avatarUsers, name: "Ivan", status: "How are you?",  location: {city: "Minsk,", country: "Belarus"}},
        // {id: 3, followed:false, avatar: avatarUsers, name: "Sveta", status: "I almost ball?",  location: {city: "Milan,", country: "Italia"}},
        // {id: 2, followed: true, avatar: avatarUsers, name: "Peter", status: "Qwere now?",  location: {city: "Vilnus,", country: "Litva"}},

    ],

    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    userPreloader: false,
    userFollowProgress: [],




}

const usersPageReduser = (state = initionalState, action) => {


    switch (action.type) {

        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }

                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET__USERS:
            return {
                ...state,
                // users: [...state.users, ...action.users] add to the end of the array
                users: action.users /**re-inserted */
            }

        case SET__PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET__TOTAL__USER__COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

        case SET__PRELOADER:
            return {
                ...state,
                userPreloader: action.preloaderState
            }

        case SET__PROGRESS:
            return {
                ...state,
                // userFollowProgress: action.followProgress

                userFollowProgress: action.followProgress
                    ? [...state.userFollowProgress, action.userId]
                    : state.userFollowProgress.filter(id => id != action.userId)
            }

        default:

            return state;
    }

}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setPage = (currentPage) => {
    return {
        type: SET__PAGE,
        currentPage
    }

}

export const setTotalUserCount = (totalCount) => {
    return {
        type: SET__TOTAL__USER__COUNT,
        totalCount
    }

}

export const setUsers = (users) => {
    return {
        type: SET__USERS,
        users
    }
}

export const setUsersPreloader = (preloaderState) => {
    return {
        type: SET__PRELOADER,
        preloaderState
    }
}

export const followProgress = (followProgress, userId) => {
    return {
        type: SET__PROGRESS,
        followProgress, userId
    }
}

export const getUsersThunk = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(setUsersPreloader(true))

        dispatch(setPage(currentPage))

        usersAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(setUsers(data.items))
            dispatch(setUsersPreloader(false))

            // this.props.setTotalUserCount(response.data.totalCount) return all pages - 3000 elements

        })
    }
}

export const followThunk = (userId) => {

    return (dispatch) => {
        dispatch(setUsersPreloader(true))

        dispatch(followProgress(true, userId))
        usersAPI.usersFollow(userId).then(data => {

            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }

            dispatch(followProgress(false, userId))

            dispatch(setUsersPreloader(false))


        })

    }
}

export const unfollowThunk = (userId) => {

    return (dispatch) => {
        dispatch(setUsersPreloader(true))

        dispatch(followProgress(true, userId))
        usersAPI.usersUnFollow(userId).then(data => {

            if (data.resultCode === 0) {
                dispatch(unfollow(userId))
            }

            dispatch(followProgress(false, userId))

            dispatch(setUsersPreloader(false))

        })
    }

}


export default usersPageReduser;
















