// import React from "react";
// import s from './users.module.css';
// import avatarUsers from './../../../img/avatar.png';
// import * as axios from "axios";

// class Users extends React.Component {


//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
//             withCredentials: true,
//             headers: {
//                 'API-KEY': 'e0eb3e90-674a-4e69-b823-a62f9ed5af70'
//             }
//         }).then(response => {

//             this.props.setUsers(response.data.items)

//             // this.props.setTotalUserCount(response.data.totalCount) return all pages - 3000el

//         })
//     }

//     onPageChanged = (pageNumber) => {
//         this.props.setPage(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
//             withCredentials: true,
//             headers: {
//                 'API-KEY': 'e0eb3e90-674a-4e69-b823-a62f9ed5af70'
//             }
//         }).then(response => {
//             this.props.setUsers(response.data.items)

//         })
//     }

//     render() {

//         let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) 

//         let pages = []

//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i)
//         }

//         return (
//             <div className={s.users}>
//                 <h2 className={s.users__title}>Users</h2>

//                 <div className={s.users__content}>

//                     {
//                         this.props.users.map(u => {
//                             let unfollow = () => { this.props.unfollow(u.id) }
//                             let follow = () => { this.props.follow(u.id) }


//                             let onClickSubscribe = u.followed ? unfollow : follow
//                             let textBtn = u.followed ? "Unfollow" : "Follow"

//                             return (
//                                 <div className={s.users__item} key={u.id}>

//                                     <div className={s.users__info}>
//                                         <img className={s.users__avatar} src={u.photos.small != null ? u.photos.small : avatarUsers} />

//                                         <button onClick={onClickSubscribe} className={s.subscribe}>{textBtn}</button>

//                                     </div>

//                                     <div className={s.users__text}>
//                                         <div className={s.users__contact}>
//                                             <span className={s.users__name}>{u.name}</span>
//                                             <p className={s.users__locations}>
//                                                 {/* <span>{u.location.city}</span>
//                                                 <span>{u.location.country}</span> */}
//                                             </p>
//                                         </div>

//                                         <p className={s.users__status}>
//                                             {u.status}
//                                         </p>
//                                     </div>

//                                 </div>
//                             )
//                         })
//                     }
//                 </div>

//                 <div className={s.users__pagination}>

//                     {
//                         pages.map(p => {
//                             return (

//                                 <span onClick={ () => {this.onPageChanged(p)}} 
//                                     className={this.props.currentPage === p 
//                                     ? `${s.users__pagination_item} ${s.active}` 
//                                     :s.users__pagination_item } >
                                        
//                                         {p}
                                        
//                                 </span>

//                             )

//                         })
//                     }

//                 </div>

//             </div>


//         )
//     }


// }

// export default Users;