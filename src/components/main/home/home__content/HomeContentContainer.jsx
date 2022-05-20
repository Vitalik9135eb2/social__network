import React from "react";
import s from './homeContent.module.css';
// import LeftContentContainer from "./left/LeftContentContainer";
import RightContent from "./right/RightContent";
import LeftContent from "./left/LeftContent";
import { addPost, getProfileUserThunk, getUsersStatusThunk, updateUsersStatusThunk } from './../../../redux/homePage-reduser';
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";



class HomeContentContainerAPI extends React.Component {

    componentDidMount() {

        let userId =  this.props.match.params.userId
        if(!userId){
            userId = this.props.myUserId
        }
        this.props.getProfileUserThunk(userId)

        this.props.getUsersStatusThunk(userId)
    }

    render(){


        return (

            <div className={s.home__content}>
                <LeftContent
                    addPost={this.props.addPost}
                    onPostChange={this.props.onPostChange}
                    {...this.props.homePage}
                
                />
    
                <RightContent   profile={this.props.homePage.profile} 
                                status={this.props.homePage.status} 
                                updateStatus={this.props.updateUsersStatusThunk}
                />

            </div>
    
        )
    }
    
}



let mapStateToProps = (state) => {
    return{
        homePage: state.homePage,
        isAuth: state.auth.isAuth,
        status: state.homePage.status,
        myUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect (mapStateToProps,{addPost, getProfileUserThunk, getUsersStatusThunk, updateUsersStatusThunk }),
    withRouter,
    withAuthRedirect,
)
(HomeContentContainerAPI)

// let AuthRedirectComponent = withAuthRedirect(HomeContentContainerAPI)


// let homeContentComponentContainerWithUrl = withRouter(AuthRedirectComponent);

// const HomeContentContainer = connect (mapStateToProps,{addPost, onPostChange, getProfileUserThunk }) (homeContentComponentContainerWithUrl);

// export default HomeContentContainer
