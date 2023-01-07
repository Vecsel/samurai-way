import React from 'react';

import './index.css';
import { store, StateType} from "./redux/State";
import ReactDOM from "react-dom";
import {App} from "./App";

export let rerenderEntireTree=(state:StateType)=>{
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} />,

        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)