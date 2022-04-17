import React from "react";
import Home from "./home/Home";
import s from './main.module.css';
import Setting from './setting/Setting';
import About from "./about/About";
import Photos from './photos/Photos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from "./dialogs/DialogsContainer";
import SitBarContainer from "./sitBar/SitBarContainer";


const Main = (props) => {

    return (
        <BrowserRouter>

            <section className={s.main}>
                <div className='container'>
                    <div className={s.inner}>
                        <SitBarContainer
                        // store={props.store} 
                        />
                        <Routes>
                            <Route path='/home' element={<Home
                            // store={props.store}
                            />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/photos' element={<Photos />} />
                            <Route path='/dialogs/*' element={<DialogsContainer />} />
                            <Route path='/setting' element={<Setting />} />
                        </Routes>


                    </div>
                </div>
            </section>

        </BrowserRouter>
    )
}

export default Main;