

const Add_Message = "Add-Message";
const Update_New_Message = "Up-New-Message";


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
    newTextMessage: " ",

}

const dialogPageReduser = (state = initionalState, action) => {

    switch(action.type){
        case Add_Message:

            let newMessage = {id: state.message.length + 1, name: action.user, text: state.newTextMessage};
            state.message.push(newMessage);
            state.newTextMessage = " ";
            return state;

        case Update_New_Message:

            state.newTextMessage = action.newText;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreate = (user)=>{
    return {
        type: Add_Message, user
    }
}
export const updateNewMessageActionCreate = (text)=>{
    return {
        type: Update_New_Message, newText: text
    }
}
export default dialogPageReduser;