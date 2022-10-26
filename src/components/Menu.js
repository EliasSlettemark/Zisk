import React from "react";
import menu from "../css/menu.css";
import { useNavigate } from "react-router-dom";

export default function Menu(props) {

  const navigate = useNavigate()
  
  return (
    <div className={`menu ${props.menu && "mode"}`}>
      <ul>
        <li onClick={() => window.location.replace("https://ziskprotocol.com")}>Home</li>
        <li onClick={() => navigate("/swap")}>Swap</li>
        <li onClick={() => navigate("/pools")}>Pools</li>
        <li onClick={() => navigate("/lock")}>Lock</li>
      </ul>
    </div>
  );
}
