import React from "react";
import cont from "./ProfileInfo.module.css"



export const ProfileInfo = () => {
    return (
        <div >
            <div><img
                src={"https://avatars.mds.yandex.net/i?id=eea5e652d5eeee6e37f14b67a448b391-4612938-images-thumbs&n=13"}/>
            </div>
            <div className={cont.infoBlock}>Avatar+info</div>
        </div>
    )
}