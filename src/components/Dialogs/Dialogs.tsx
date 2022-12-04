import React from "react";
import m from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {Message} from "./Message/Message";
import {UserMess} from "./DialogItem/DialogItem";

type indexProps={
    id:number
    name:string
}
type DialogsIndex={
    dialogs:indexProps[]
    messages:indexPropsMessages[]
}
type indexPropsMessages={
    id:number
    message:string
}

export const Dialogs = (props:DialogsIndex) => {

    /*let dialogsData = [
        {id: 1, name: "Viktor"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Alex"},
        {id: 4, name: "Sveta"},
    ]*/
    let dialogsElements = props.dialogs.map(d=>(<UserMess name={d.name} id={d.id}/> ))


    /*let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hi, go home"},
        {id: 3, message: "Hi, Go cinema"},
        {id: 4, message: "Yo"},
    ]*/
     let messagesElements= props.messages.map(m=><Message message={m.message}/>)
    return (
        <div>
            <div className={m.messages}>
                <div>
                    {dialogsElements}

                    {/*<UserMess name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <UserMess name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <UserMess name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
                </div>
                <div>
                    {messagesElements}
                    {/*<Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                    <Message message={messagesData[3].message}/>*/}


                </div>
            </div>

        </div>
    )
}