import React from 'react'
import './App.css';
import { connect } from "react-redux";
import {initializedAppThunk} from "./components/redux/app-reduser";
import { compose } from "redux";
import { Redirect, withRouter } from 'react-router-dom';


import HeaderContainer from './components/header/HeaderContainer';
import Main from './components/main/Main';
import Preloader from './components/preloader/preloader';

class App extends React.Component {

  componentDidMount(){

    this.props.initializedAppThunk()
  }



  render(){

    if(!this.props.initialized){
      return <Preloader/>
    }
    return (
      <div className="app-wrapper">

          <HeaderContainer />
          <Main/>

      </div>
    );

  }


}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// export default connect (mapStateToProps, {usersDataLoginThunk })(App);

export default compose(
  withRouter,

  connect (mapStateToProps,{initializedAppThunk }),
  // withAuthRedirect,
  )
(App)