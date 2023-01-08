import React from "react";
import cont from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes} from "../../redux/State";

type indexProps={
    id:number
    post:string
    likesCount:number
}
type postIndex={
    post:indexProps[]
    newPostText:string
    dispatch:(action:ActionsTypes)=>void
}

export const Profile = (props:postIndex) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPost post={props.post}  newPostText={props.newPostText} dispatch={props.dispatch}/>

        </div>
    )
}