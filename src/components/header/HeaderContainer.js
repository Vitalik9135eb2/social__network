import React from "react";
import * as axios from "axios";
import Header from "./Header";
import { connect } from "react-redux";
import {authSetUserData, usersDataLoginThunk, logoutThunk  } from "./../redux/auth-reduser";
import { authAPI} from "./../../api/api";



class HeaderContainer extends React.Component {

    // componentDidMount(){

    //     this.props.usersDataLoginThunk()
    // }

    render(){
        return (
            <Header {...this.props}/>
        )
    }
    
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {authSetUserData, logoutThunk  })(HeaderContainer);