import React, { useState } from "react";
import "./Header.css";

//material-ui icons
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

//context state provider
import { useStateValue } from "../StateProvider";

function Header() {
  //const [user, setUser] = setState(null);
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          src={user?.displayName}
          alt={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search" />
      </div>
      <div className="header__rigth">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}
export default Header;
