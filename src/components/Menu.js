import React from "react";
import menu from "../css/menu.css";

export default function Menu(props) {
  return (
    <div className={`menu ${props.menu && "mode"}`}>
      <ul>
        <li onClick={() => props.handleMode("home")}>Home</li>
        <li onClick={() => props.handleMode("swap")}>Swap</li>
        <li onClick={() => props.handleMode("pools")}>Pools</li>
        <li onClick={() => props.handleMode("lock")}>Lock</li>
      </ul>
    </div>
  );
}
