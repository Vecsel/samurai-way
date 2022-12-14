import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost, StateType} from "./redux/State";


export let rerenderEntireTree=(State:StateType)=>{
    ReactDOM.render(
        <App state={State} addPost={addPost}/>,

        document.getElementById('root')
    );
}

