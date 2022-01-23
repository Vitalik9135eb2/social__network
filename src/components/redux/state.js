
let state ={
    sideBar: {
        user:[
            {id: 1, name: "Vitalii", email: "05vp94@mail.ru"},
        ]
    },
    
    homePage: {
        messagePost: [
            {id: 1, message: "How are you?", currentLikes: 10},
            {id: 2, message: "My first posts!", currentLikes: 255},
            {id: 2, message: "sadasdsad!", currentLikes: 2},
        ]
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
        ]
    }
}

export default state;