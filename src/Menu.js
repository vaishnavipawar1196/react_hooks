import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return(
        <>          
            <NavLink activeClassName="active_link" end to="/">Home</NavLink>
            <NavLink activeClassName="active_link" to="/about">About</NavLink>
            <NavLink activeClassName="active_link" to="/contact">Contact</NavLink>           
            <NavLink activeClassName="active_link" to="/search">Search</NavLink>           
        </>
    )
}

export default Menu;