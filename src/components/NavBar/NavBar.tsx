import React from "react";
import n from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <nav className={n.nav}>
            <div className={`${n.item} ${n.active}`}>
                <a>Pofile</a>
            </div>
            <div className={n.item}>
                <a>Messages</a>
            </div>
            <div className={n.item}>
                <a>News</a>
            </div>
            <div className={n.item}>
                <a>Music</a>
            </div>
            <div className={n.item}>
                <a>Setings</a>
            </div>
        </nav>
    )
}