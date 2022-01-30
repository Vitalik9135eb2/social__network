

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
                {id: 1, message: "How are you?", currentLikes: 10},
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

    addPostNew () {
        let newPost = {id:  this._state.homePage.messagePost.length + 1, message: this._state.homePage.newPostText, currentLikes: 0};
        this._state.homePage.messagePost.push(newPost);
        this._state.homePage.newPostText = " ";
        this._callSubscribe(this._state)
    },
    updateNewPost  (newText) {
        this._state.homePage.newPostText = newText;
        this._callSubscribe(this._state)
    
    },

    addMessage (user, ) {
        
        let newMessage = {id: this._state.dialogPage.message.length + 1, name: user, text: this._state.dialogPage.newTextMessage};
        this._state.dialogPage.message.push(newMessage);
        this._state.dialogPage.newTextMessage = " ";
        this._callSubscribe(this._state)
    },

    updateNewTextMessage (newText) {
        this._state.dialogPage.newTextMessage = newText;
        this._callSubscribe(this._state)
    },

    subscribe (observer) {
        this._callSubscribe = observer;
    }

}


window.store = store;

export default store;