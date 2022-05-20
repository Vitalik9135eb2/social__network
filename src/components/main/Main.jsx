import React from "react";
import Home from "./home/Home";
import s from './main.module.css';
import Setting from './setting/Setting';
import UsersContainer from "./users/UsersContainer";
import Photos from './photos/Photos';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from "./dialogs/DialogsContainer";
import SitBarContainer from "./sitBar/SitBarContainer";
import Login from "../login/login"


const Main = (props) => {

    return (

        <section className={s.main}>
            <div className='container'>
                <div className={s.inner}>

                    <Route path='/login' component={Login} />

                    <SitBarContainer />

                    <Route path='/home/:userId?' component={Home} />
                    <Route path='/users' component={UsersContainer} />
                    <Route path='/photos' component={Photos} />
                    <Route path='/dialogs/' component={DialogsContainer} />
                    <Route path='/setting' component={Setting} />




                </div>
            </div>
        </section>


    )
}

export default Main;