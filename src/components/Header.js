import React from "react"
import header from "../css/header.css"
import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";

export default function Header(props){

    const navigate = useNavigate()

    return (
        <div className="header">
            <div className="container">
                <div>
                    <img src={logo} />
                    <ul>
                        <li onClick={() => window.location.replace("https://ziskprotocol.com")}>Home</li>
                        <li onClick={() => navigate("/swap")}>Swap</li>
                        <li onClick={() => navigate("/pools")}>Pools</li>
                        <li onClick={() => navigate("/lock")}>Lock</li>
                    </ul>
                </div>
                    <button className="stake">Connect Wallet</button>
                    <div onClick={() => props.handleMenu()} className="open">
                        <div className="lines">
                            <div className={`line ${props.menu ? "mode" : undefined}`}></div>
                            <div className={`line ${props.menu ? "mode" : undefined}`}></div>
                        </div>
                    </div>
            </div>
        </div>
    )
}