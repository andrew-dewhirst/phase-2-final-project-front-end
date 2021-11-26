import React from "react";
import { NavLink } from 'react-router-dom';

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink to ="/"
      exact
      style={linkStyles}
      activeStyle={{background: "red"}}
      >
        Home
      </NavLink>
      <NavLink to ="/nfl"
      exact
      style={linkStyles}
      activeStyle={{background: "red"}}
      >
        NFL
      </NavLink>
      <NavLink to ="/mlb"
      exact
      style={linkStyles}
      activeStyle={{background: "red"}}
      >
        MLB
      </NavLink>
      <NavLink to ="/nba"
      exact
      style={linkStyles}
      activeStyle={{background: "red"}}
      >
        NBA
      </NavLink>
      <NavLink to ="/nhl"
      exact
      style={linkStyles}
      activeStyle={{background: "red"}}
      >
        NHL
      </NavLink>
    </div>
  )
}

export default NavBar