import React from "react";
import cont from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={cont.content}>
            <div><img
                src={"https://avatars.mds.yandex.net/i?id=eea5e652d5eeee6e37f14b67a448b391-4612938-images-thumbs&n=13"}/>
            </div>
            <div>Avatar+info</div>
            <div>My posts
                <div>your news</div>
            </div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
            </div>
        </div>
    )
}