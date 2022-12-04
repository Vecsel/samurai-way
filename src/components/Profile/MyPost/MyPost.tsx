import React from "react";
import cont from "./MyPost.module.css"
import {Post} from "../Post/Post";

type indexProps={
    id:number
    post:string
    likesCount:number
}
type postIndex={
    post:indexProps[]
}
export const MyPost = (props:postIndex) => {

    let postElements=props.post.map(p=><Post messages={p.post} likesCount={p.likesCount}/>)
    return (
        <div className={cont.content}>

            <div>
                <h3>My posts</h3>
                <div>your news</div>
                <textarea></textarea>
                <div>
                    <button>Send</button>
                </div>
                {postElements}
                {/*<Post messages={postData[0].post} likesCount={postData[0].likesCount}/>
                <Post messages={postData[1].post} likesCount={postData[1].likesCount}/>*/}
            </div>

        </div>
    )
}