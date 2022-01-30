import React from 'react'
import './App.css';



import Header from './components/header/Header';
import Main from './components/main/Main';

const App = (props) => {
  
  return (
    <div className="app-wrapper">
      <Header/>    
      <Main state={props.state} 
            addPostNew={props.addPostNew} 
            addMessage={props.addMessage} 
            updateNewTextMessage={props.updateNewTextMessage}
            updateNewPost={props.updateNewPost}/>
      
      
    </div>
  );
}

export default App;
