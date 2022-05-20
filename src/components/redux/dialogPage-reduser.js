

const Add_Message = "Add-Message";


let initionalState ={
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

}

const dialogPageReduser = (state = initionalState, action) => {
    // let stateCopy;

    switch(action.type){
        case Add_Message:

            let newMessage = {id: state.message.length + 1, name: action.me, text: action.newMessageInput};

            return {
                ...state,
                message:[...state.message, newMessage ],
            };
        
        default:
            return state;
    }
}

export const addMessage = (newMessageInput, me)=>{
    return {
        type: Add_Message, newMessageInput, me
    }
}

export default dialogPageReduser;