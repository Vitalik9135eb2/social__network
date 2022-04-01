
import dialogPageReduser from "./dialogPage-reduser";
import homePageReduser from "./homePage-reduser";
import sideBarReduser from "./sideBar-reduser";

import {combineReducers, createStore} from "redux";


let redusers = combineReducers({
    sideBar: sideBarReduser,
    homePage: homePageReduser,
    dialogPage: dialogPageReduser

});

let store = createStore(redusers)


export default store;