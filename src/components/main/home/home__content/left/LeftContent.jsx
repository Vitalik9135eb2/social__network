import React from "react";
import s from './leftContent.module.css';
import PublishedPost from "./published__posts/PublishedPost";

const LeftContent = () => {
    return (

        <div className={s.home__left}>
            <h4 className={s.posts__title}>My posts</h4>

            <div className={s.posts}>

                <form className={s.new__posts}>
                    <textarea className={s.new__postText} placeholder='your news...' />

                    <button className={s.send__post}>Send</button>
                </form>

                <div className={s.published__posts}>
                    <PublishedPost message="How are you?" currentLikes="10"/>
                    <PublishedPost message="My first posts!" currentLikes="1"/>

                </div>
                


            </div>

        </div>


    )
}

export default LeftContent;