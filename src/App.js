import React from 'react'
import './App.css';



import Header from './components/header/Header';
import Main from './components/main/Main';

const App = (props) => {  

  return (
    <div className="app-wrapper">
      <Header/>    
      <Main store={props.store}
            // state={props.state} 
            // dispatch={props.dispatch}
            // addPostNew={props.addPostNew} 
            // updateNewPost={props.updateNewPost}
            // addMessage={props.addMessage} 
            // updateNewTextMessage={props.updateNewTextMessage}
          />
      
      
    </div>
  );
}

export default App;
