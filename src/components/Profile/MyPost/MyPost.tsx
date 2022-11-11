import React from "react";
import cont from "./MyPost.module.css"

export const MyPost = () => {
    return (
        <div className={cont.content}>

            <div>My posts
                <div>your news</div>
                <textarea></textarea>
                <button>Send</button>
            </div>

        </div>
    )
}