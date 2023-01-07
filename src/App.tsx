import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

import {DialogsType, MessagesType, PostType, StateType} from "./redux/State";

/*type indexProps={
    id:number
    post:string
    likesCount:number
}*/
type AppPropsType={
    state:StateType
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
}
/*type indexPropsDialog={
    id:number
    name:string
}
type indexPropsMessages={
    id:number
    message:string
}*/


export const App = (props:AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className="App-content">
                    <Routes>
                        <Route path="/profile" element={<Profile post={props.state.profilePage.postData} addPost={props.addPost} newPostText={props.state.profilePage.newPostText} updateNewPostText={props.updateNewPostText}/>}></Route>
                        <Route path="/messages" element={<Dialogs dialogs={props.state.messagesPage.dialogsData} messages={props.state.messagesPage.messagesData}/>}> </Route>
                        <Route path="/news" element={<News/>}></Route>
                        <Route path="/music" element={Music}></Route>
                        <Route path="/settings" element={Settings}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


