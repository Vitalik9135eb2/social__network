import React from "react";
import { connect } from "react-redux";
import { setTotalUserCount, followProgress,getUsersThunk, followThunk, unfollowThunk } from "../../redux/usersPage-reduser";
import Users from "./Users";
import Preloader from "../../preloader/preloader";





class UsersContainerApi extends React.Component {


    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize)
    }

    render() {
        return <>

            {this.props.userPreloader ? <Preloader/> : null}

            <Users 
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                // follow={this.props.follow}
                // unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                // followProgress={this.props.followProgress}
                userFollowProgress={this.props.userFollowProgress}
                followThunk = {this.props.followThunk}
                unfollowThunk = {this.props.unfollowThunk}
            />
        
        </>
        
        
    }


}



let mapStateToProps = (state) =>{

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        userPreloader: state.usersPage.userPreloader,
        userFollowProgress: state.usersPage.userFollowProgress,
    }
}


const UsersContainer = connect (mapStateToProps, 
    {
        // follow,
        // unfollow,
        // setUsers,
        // setPage,
        setTotalUserCount,
        // setUsersPreloader,
        followProgress,
        getUsersThunk,
        followThunk,
        unfollowThunk,

    })
    (UsersContainerApi)

export default UsersContainer;