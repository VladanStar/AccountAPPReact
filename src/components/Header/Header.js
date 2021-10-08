import React from 'react'
import {Link, NavLink} from "react-router-dom";
import "./Header.css"



const Header= ()=> {
    return (
       <nav className="navbar navbar-expand lg navbar-light bg-light">
           <Link to="/" className="navbar-brand">Account</Link>
           <ul className="navbar-nav ml-auto">
               <NavLink to="/" activeClassName={"activeLink"} className="nav-link">Account A</NavLink>
               <NavLink to="/add" activeClassName={"activeLink"} className="nav-link">Account Add</NavLink>
               <NavLink to="/edit" activeClassName={"activeLink"} className="nav-link">Account Edit/Delete</NavLink>
           </ul>
       </nav>
       
    )
}

export default Header;
