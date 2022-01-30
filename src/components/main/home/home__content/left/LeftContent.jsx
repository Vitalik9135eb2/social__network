import React from "react";
import s from './leftContent.module.css';
import PublishedPost from "./published__posts/PublishedPost";

const LeftContent = (props) => {

    let postElement = props.homePage.messagePost.map( p =><PublishedPost message={p.message} currentLikes={p.currentLikes}/> );

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPostNew();

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;;
        props.updateNewPost(text);
    }

    return (

        <div className={s.home__left}>
            <h4 className={s.posts__title}>My posts</h4>

            <div className={s.posts}>

                <form className={s.new__posts}>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.homePage.newPostText} className={s.new__postText} placeholder='your news...' />

                    <button type="button" onClick={addPost} className={s.send__post}>Send</button>
                </form>

                <div className={s.published__posts}>
                    {postElement}

                </div>
                


            </div>

        </div>


    )
}

export default LeftContent;