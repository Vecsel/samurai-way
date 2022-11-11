import React from "react";
import cont from "./Post.module.css"

type messagesProps={
    messages: string
    likes?: number
}

export const Post = (props:messagesProps) => {
    return (
        <div className={cont.content}>
            <img src={"https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg"}/>
            {props.messages}
            <button>Like</button>
            {props.likes}

        </div>
    )
}