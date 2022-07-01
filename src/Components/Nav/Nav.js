import React from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "grey",
  textDecoration: "none",
  color: "white",
};


export default function Nav({currentUser}) {
    console.log(currentUser);
  return (
    <div className='Nav'>
        {currentUser.userName ? <p>Hello {currentUser.userName}</p> : <Link to='login'/>}
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
       Products
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>

    </div>
  )
}

// if the current user has a name property, hello name
    // otherwise - 
