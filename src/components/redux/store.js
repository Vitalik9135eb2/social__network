import dialogPageReduser from "./dialogPage-reduser";
import homePageReduser from "./homePage-reduser";
import sideBarReduser from "./sideBar-reduser";

const Add_Post = "Add-Post";
const Upddate_New_post = "Update-New-Post";
const Add_Message = "Add-Message";
const Update_New_Message = "Up-New-Message";



let store = {
    _callSubscribe() {

    },

    _state: {
        sideBar: {
            user:[
                {id: 1, name: "Vitalii", email: "05vp94@mail.ru"},
            ]
        },
        
        homePage: {
            messagePost: [
                
                {id: 2, message: "My first posts!", currentLikes: 255},
            ],
            newPostText: "",
        },
    
        dialogPage: {
            contact:[
                {id: 1, name:"Dmitri"},
                {id: 2, name:"Anna"},
                {id: 3, name:"Ivan"},
                {id: 4, name:"Joni"}
            ],
            message:[
                {id: 1, name:"Anna", text: "How are you?"},
                {id: 2, name:"Me", text: "Fine thanks"},
                {id: 3, name:"Anna", text: "qwerty"},
                {id: 4, name:"Me", text: "What's?"},
            ],
            newTextMessage: " ",
    
        }
    },
    getState(){
        
        return this._state
    },

    distpatch(action){

        this._state.sideBar = sideBarReduser(this._state.sideBar, action);
        this._state.homePage = homePageReduser(this._state.homePage, action);
        this._state.dialogPage = dialogPageReduser(this._state.dialogPage, action);

        this._callSubscribe(this._state)
    },


    subscribe (observer) {
        this._callSubscribe = observer;
    }

}



window.store = store;

export default store;