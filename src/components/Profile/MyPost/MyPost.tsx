import React from "react";
import cont from "./MyPost.module.css"
import {Post} from "../Post/Post";

export const MyPost = () => {
    let postData = [
        {id: 1, post: "Hi, how are you?", likesCount:50},
        {id: 2, post: "Hi, is is my first post", likesCount:60},

    ]
    return (
        <div className={cont.content}>

            <div>
                <h3>My posts</h3>
                <div>your news</div>
                <textarea></textarea>
                <div>
                    <button>Send</button>
                </div>
                <Post messages={postData[0].post} likesCount={postData[0].likesCount}/>
                <Post messages={postData[1].post} likesCount={postData[1].likesCount}/>
            </div>

        </div>
    )
}