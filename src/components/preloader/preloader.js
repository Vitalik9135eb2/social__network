
import preloader from './../../img/preloader.gif';
import s from './preloader.module.css'


const Preloader = () => {

    return(

        <div className={s.preloader__wrap}>

            <img className={s.preloader__img} src={preloader}/>

        </div>
    
    )
}

export default Preloader
