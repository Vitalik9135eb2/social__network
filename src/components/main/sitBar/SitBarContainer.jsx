import React from "react";
import { connect } from "react-redux";
import SitBar from "./SitBar";


// const SitBarContainer = (props) => {
    
//     // let state = props.store.getState();

    
//     return(
//         <SitBar state={state}/>
//     )
// }

let mapStateToProps = (state) =>{
    return {
        sideBar: state.sideBar
    }

}

const SitBarContainer = connect (mapStateToProps) (SitBar)



export default SitBarContainer;