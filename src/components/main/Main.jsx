import React from "react";
import Home from "./home/Home";
import s from './main.module.css';
import SitBar from "./sitBar/SitBar";
import Dialogs from './dialogs/Dialogs';
import Setting from './setting/Setting';
import About from "./about/About";
import Photos from './photos/Photos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const Main = (props) => {
    
    return (
        <BrowserRouter>

            <section className={s.main}>
                <div className='container'>
                    <div className={s.inner}>
                        <SitBar state={props.state.sideBar} />
                        <Routes>
                            <Route path='/home' element={<Home homePage={props.state.homePage} 
                                                                addPostNew={props.addPostNew} 
                                                                updateNewPost={props.updateNewPost}/>} />
                            <Route path='/about' element={<About/>} />
                            <Route path='/photos' element={<Photos/>} />
                            <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogPage} 
                                                                        addMessage={props.addMessage}
                                                                        updateNewTextMessage={props.updateNewTextMessage}/>} />
                            <Route path='/setting' element={<Setting/>} />
                        </Routes>


                    </div>
                </div>
            </section>

        </BrowserRouter>
    )
}

export default Main;