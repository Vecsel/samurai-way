import React from "react";
import cont from "./MyPost.module.css"
import {Post} from "../Post/Post";

export const MyPost = () => {
    return (
        <div className={cont.content}>

            <div>My posts
                <div>your news</div>
                <textarea></textarea>
                <button>Send</button>
                <Post messages={"Hi, how are you?"} likes={50}/>
                <Post messages={"Hi, is is my first post"} likes={60}/>
            </div>

        </div>
    )
}