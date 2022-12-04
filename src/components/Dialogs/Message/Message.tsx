import React from "react";
import m from "./../Dialogs.module.css"



type UserMessage={
    message: string
    id?:number
}
export const Message=(props:UserMessage)=>{
    return <div className={m.message}>{props.message}</div>
}
