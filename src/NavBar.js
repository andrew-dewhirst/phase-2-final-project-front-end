import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar() {

  const navStyle = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    color: "white",
  };

  return (
    <div>
      <NavLink to ="/"
      exact
      style={navStyle}
      activeStyle={{background: "red"}}
      >
        Home
      </NavLink>
      <NavLink to ="/nfl"
      exact
      style={navStyle}
      activeStyle={{background: "red"}}
      >
        NFL
      </NavLink>
      <NavLink to ="/mlb"
      exact
      style={navStyle}
      activeStyle={{background: "red"}}
      >
        MLB
      </NavLink>
      <NavLink to ="/nba"
      exact
      style={navStyle}
      activeStyle={{background: "red"}}
      >
        NBA
      </NavLink>
      <NavLink to ="/nhl"
      exact
      style={navStyle}
      activeStyle={{background: "red"}}
      >
        NHL
      </NavLink>
    </div>
  )
}

export default NavBar