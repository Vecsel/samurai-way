import React, {RefObject} from "react";
import cont from "./MyPost.module.css"
import {Post} from "../Post/Post";

type indexProps={
    id:number
    post:string
    likesCount:number
}
type postIndex={
    post:indexProps[]
    addPost:(post:string)=>void

}
export const MyPost = (props:postIndex) => {

    let postElements=props.post.map(p=><Post messages={p.post} likesCount={p.likesCount}/>)

    const newPostEl:RefObject<HTMLTextAreaElement>=React.createRef()
    const onAddPost=()=>{
        let text=newPostEl.current?.value
        console.log(text)
        if(text){
            props.addPost(text)
        }
    }

    return (
        <div className={cont.content}>

            <div>
                <h3>My posts</h3>
                <div>your news</div>
                <textarea ref={newPostEl}></textarea>
                <div>
                    <button onClick={onAddPost}>Send</button>
                </div>
                {postElements}
                {/*<Post messages={postData[0].post} likesCount={postData[0].likesCount}/>
                <Post messages={postData[1].post} likesCount={postData[1].likesCount}/>*/}
            </div>

        </div>
    )
}