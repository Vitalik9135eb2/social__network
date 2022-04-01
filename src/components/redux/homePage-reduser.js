
const Add_Post = "Add-Post";
const Upddate_New_post = "Update-New-Post";

let initionalState = {
    messagePost: [
        {id: 1, message: "How are you?", currentLikes: 10},
        {id: 2, message: "My first posts!", currentLikes: 255},
    ],
    newPostText: "",
}

const homePageReduser = (state = initionalState, action) => {
    
    switch(action.type){
        case Add_Post:

            let newPost = {id: state.messagePost.length + 1, message: state.newPostText, currentLikes: 0};
            state.messagePost.push(newPost);
            state.newPostText = " ";
            return state;

        case Upddate_New_post:
            
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    } 

}

export const addPostActionCreate = ()=>{
    return {
        type: Add_Post
    }
}
export const updateNewPostActionCreate = (text)=>{
    return {
        type: Upddate_New_post, newText: text
    }
}


export default homePageReduser;