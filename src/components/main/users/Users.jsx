import React from "react";
import s from './users.module.css';
import avatarUsers from './../../../img/astronaut.png';
import { NavLink } from "react-router-dom";
import { usersAPI} from "../../../api/api";



const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <h2 className={s.users__title}>Users</h2>

            <div className={s.users__content}>

                {
                    props.users.map(u => {
                        let unfollow = () => {
                            props.unfollowThunk(u.id)
                        }

                        let follow = () => {
                            props.followThunk(u.id)
                        }


                        let onClickSubscribe = u.followed ? unfollow : follow
                        let textBtn = u.followed ? "Unfollow" : "Follow"
                        
                        return (
                            <div className={s.users__item} key={u.id}>

                                <div className={s.users__info}>
                                    <NavLink to={"/home/" + u.id}>
                                        <img className={s.users__avatar} src={u.photos.small != null ? u.photos.small : avatarUsers} />

                                    </NavLink>

                                    <button disabled={props.userFollowProgress.some(id => id === u.id)} onClick={onClickSubscribe} className={s.subscribe}>{textBtn}</button>

                                </div>

                                <div className={s.users__text}>
                                    <div className={s.users__contact}>
                                        <span className={s.users__name}>{u.name}</span>
                                        <p className={s.users__locations}>
                                            {/* <span>{u.location.city}</span>
                                                <span>{u.location.country}</span> */}
                                        </p>
                                    </div>

                                    <p className={s.users__status}>
                                        {u.status}
                                    </p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

            <div className={s.users__pagination}>

                {
                    pages.map(p => {
                        return (

                            <span onClick={() => { props.onPageChanged(p) }}
                                className={props.currentPage === p ? `${s.users__pagination_item} ${s.active}` : s.users__pagination_item} >

                                {p}

                            </span>

                        )

                    })
                }

            </div>

        </div>


    )

}

export default Users;