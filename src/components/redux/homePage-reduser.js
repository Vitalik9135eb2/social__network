


const Add_Post = "Add-Post";
const Upddate_New_post = "Update-New-Post";

const homePageReduser = (state, action) => {
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