import React from "react";
import Home from "./home/Home";
import s from './main.module.css';
import SitBar from "./sitBar/SitBar";
import Dialogs from './dialogs/Dialogs';

const Main = () =>{
    return(
        <section className={s.main}>
            <div className='container'>
                <div className={s.inner}>
                    <SitBar/>
                    {/* <Home/> */}
                    <Dialogs/>

                </div>
            </div>
        </section>
    )
}

export default Main;