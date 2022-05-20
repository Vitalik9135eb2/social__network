import React from "react";
import s from './leftContent.module.css';
import PublishedPost from "./published__posts/PublishedPost";
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "./../../../../../ulits/validator/validatotr";
import { textarea } from "../../../../form-item/formItem";


let maxLength10 = maxLengthCreator(10)

const addPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.new__posts}>
            <Field  component={textarea} 
                    name="newPostInput" 
                    className={s.new__postText} 
                    placeholder='your news...'
                    validate={[required, maxLength10]}
                    
            />

            <button className={s.send__post}>Send</button>
        </form>
    )
}

const ReduxAddPostForm = reduxForm({ form: "message" })(addPostForm)

const LeftContent = (props) => {

    let postElement = props.messagePost.map(p => <PublishedPost message={p.message} key={p.id} currentLikes={p.currentLikes} />);

    let addPostText = (value) => {
        props.addPost(value.newPostInput)
    }

    return (

        <div className={s.home__left}>
            <h4 className={s.posts__title}>My posts</h4>

            <div className={s.posts}>

                <div className={s.published__posts}>
                    {postElement}

                </div>

                <ReduxAddPostForm onSubmit={addPostText}/>

            </div>

        </div>


    )
}

export default LeftContent;