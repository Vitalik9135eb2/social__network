import React from "react";
import Home from "./home/Home";
import s from './main.module.css';
import SitBar from "./sitBar/SitBar";
import Dialogs from './dialogs/Dialogs';
import Setting from './setting/Setting';
import About from "./about/About";
import Photos from './photos/Photos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from "./dialogs/DialogsContainer";


const Main = (props) => {
    
    return (
        <BrowserRouter>

            <section className={s.main}>
                <div className='container'>
                    <div className={s.inner}>
                        <SitBar store={props.store} />
                        <Routes>
                            <Route path='/home' element={<Home store={props.store} />} />
                            <Route path='/about' element={<About/>} />
                            <Route path='/photos' element={<Photos/>} />
                            <Route path='/dialogs/*' element={<DialogsContainer store={props.store} />} />
                            <Route path='/setting' element={<Setting/>} />
                        </Routes>


                    </div>
                </div>
            </section>

        </BrowserRouter>
    )
}

export default Main;