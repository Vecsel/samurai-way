import React from "react";
import n from "./NavBar.module.css"
import {NavLink} from "react-router-dom";


export const NavBar = () => {
    return (
        <nav className={n.nav}>
            <div className={`${n.item} ${n.active}`}>
                <NavLink to="/profile" activeClassName={n.active}>Pofile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/messages" activeClassName={n.active}>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/news" activeClassName={n.active}>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/music" activeClassName={n.active}>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/settings" activeClassName={n.active}>Settings</NavLink>
            </div>

        </nav>
    )
}