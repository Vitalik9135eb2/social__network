import React from "react";
import Preloader from "../../../../preloader/preloader";
import s from './rightContent.module.css';
import activeIcon from './../../../../../img/active.png';
import closeIcon from './../../../../../img/close.png';
import nophoto from './../../../../../img/nophoto.png';
import Status from "./Status";

const RightContent = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    let profilePhoto = props.profile.photos.large ? props.profile.photos.large : nophoto 

    let statusSearhJob = props.profile.lookingForAJob ? activeIcon : closeIcon


    return (

        <div className={s.home__right}>

            <div className={s.profile__info}>
                <div className={s.avatar__wrap}>
                    <img src={profilePhoto} alt="" />
                </div>

                <div className={s.profile__name_wrap}>

                    <span className={s.profile__name} >{props.profile.fullName}</span>

                    {/* <p className={s.profile__status}>
                        <span>{props.profile.aboutMe ? props.profile.aboutMe : "....." }</span>
                        <span>:Status</span>

                    </p> */}

                    <Status status={props.status} updateStatus={props.updateStatus}/>
                </div>

            </div>


            <div className={s.profile__content}>
                <div className={s.profile__searh}>
                    <span>Looking for job</span>

                    <img className={s.status__job} src={statusSearhJob} alt="" />
                </div>

                <span className={s.job__info}>{props.profile.lookingForAJobDescription}</span>
            </div>


        </div>

    )
}

export default RightContent;