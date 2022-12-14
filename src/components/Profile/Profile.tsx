import React from "react";
import cont from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type indexProps={
    id:number
    post:string
    likesCount:number
}
type postIndex={
    post:indexProps[]
    addPost:(post:string)=>void
}

export const Profile = (props:postIndex) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPost post={props.post} addPost={props.addPost}/>

        </div>
    )
}