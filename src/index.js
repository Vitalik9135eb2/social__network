
import reportWebVitals from './reportWebVitals';
import store from './components/redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { addPostNew,addMessage, updateNewTextMessage, subscribe, updateNewPost } from './components/redux/state';






let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} 
          distpatch={store.distpatch.bind(store)} 
          // addMessage={store.addMessage.bind(store)} 
          // updateNewTextMessage={store.updateNewTextMessage.bind(store)} 
         />
    </React.StrictMode>,
    document.getElementById('root')
  );
}



store.subscribe(rerenderEntireTree);


rerenderEntireTree (store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
