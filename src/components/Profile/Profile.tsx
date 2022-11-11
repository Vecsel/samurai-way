import React from "react";
import cont from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {Post} from "./Post/Post";

export const Profile = () => {
    return (
        <div className={cont.content}>
            <div><img
                src={"https://avatars.mds.yandex.net/i?id=eea5e652d5eeee6e37f14b67a448b391-4612938-images-thumbs&n=13"}/>
            </div>
            <div>Avatar+info</div>
            <MyPost/>
            <Post messages={"Hi, how are you?"} likes={50}/>
            <Post messages={"Hi, is is my first post"} likes={60}/>
        </div>
    )
}