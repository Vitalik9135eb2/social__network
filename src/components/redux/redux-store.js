
import dialogPageReduser from "./dialogPage-reduser";
import homePageReduser from "./homePage-reduser";
import sideBarReduser from "./sideBar-reduser";
import usersReduser from "./usersPage-reduser";
import authReduser  from "./auth-reduser";
import thunkMiddleware from "redux-thunk";

import {applyMiddleware, combineReducers, createStore} from "redux";

import {reducer as formReducer} from "redux-form"
import appReduser from "./app-reduser";


let redusers = combineReducers({
    sideBar: sideBarReduser,
    homePage: homePageReduser,
    dialogPage: dialogPageReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer,
    app: appReduser

});

let store = createStore(redusers, applyMiddleware(thunkMiddleware))


window.store = store

export default store;