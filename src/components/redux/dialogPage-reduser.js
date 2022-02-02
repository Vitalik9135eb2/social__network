


const Add_Message = "Add-Message";
const Update_New_Message = "Up-New-Message";


const dialogPageReduser = (state, action) => {
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