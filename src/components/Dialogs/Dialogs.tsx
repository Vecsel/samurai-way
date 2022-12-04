import React from "react";
import m from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type UserMess = {
    name: string
    id: number
}
const UserMess = (props: UserMess) => {
    let path="/messages/" + props.id
    return (
        <div className={m.userMessage}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}
type UserMessage={
    message: string
    id?:number
}
const Message=(props:UserMessage)=>{
    return <div className={m.message}>{props.message}</div>
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Viktor"},
        {id: 2, name: "Dima"},
        {id: 3, name: "Alex"},
        {id: 4, name: "Sveta"},

    ]
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hi, go home"},
        {id: 3, message: "Hi, Go cinema"},
        {id: 4, message: "Yo"},

    ]

    return (
        <div>
            <div className={m.messages}>
                <div>
                    <UserMess name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <UserMess name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <UserMess name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <UserMess name={dialogsData[3].name} id={dialogsData[3].id}/>

                </div>
                <div>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message="Hi, Go cinema"/>
                    <Message message="Yo"/>

                </div>
            </div>

        </div>
    )
}