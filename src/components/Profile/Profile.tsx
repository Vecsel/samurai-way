import React from "react";
import cont from "./Profile.module.css"
import {MyPost} from "./MyPost/MyPost";
import {Post} from "./Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div >
            <ProfileInfo/>
            <MyPost/>

        </div>
    )
}