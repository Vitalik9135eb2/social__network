import React from "react";

import LeftContent from "./LeftContent";
import { addPostActionCreate, updateNewPostActionCreate} from '../../../../redux/homePage-reduser';



const LeftContentContainer = (props) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreate());
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostActionCreate(text));
    }

    return (

        <LeftContent state={state.homePage} newPost={onPostChange} addPost={addPost}/>

    )
}

export default LeftContentContainer;