import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
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
}
/*type indexPropsDialog={
    id:number
    name:string
}
type indexPropsMessages={
    id:number
    message:string
}*/


const App = (props:AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className="App-content">
                    <Route path="/profile" render={()=><Profile post={props.state.profilePage.postData}/>}/>
                    <Route path="/messages" render={()=><Dialogs dialogs={props.state.messagesPage.dialogsData} messages={props.state.messagesPage.messagesData}/>} />
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;

