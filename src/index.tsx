import React from 'react';

import './index.css';
import {addPost, State, StateType, subscribe, updateNewPostText} from "./redux/State";
import ReactDOM from "react-dom";
import App from "./App";

export let rerenderEntireTree=(State:StateType)=>{
    ReactDOM.render(
        <App state={State} addPost={addPost} updateNewPostText={updateNewPostText}/>,

        document.getElementById('root')
    );
}

rerenderEntireTree(State)

subscribe(rerenderEntireTree)