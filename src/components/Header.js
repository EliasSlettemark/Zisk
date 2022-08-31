import React from "react"
import header from "../css/header.css"
import logo from "../images/logo.png"

export default function Header(props){

    return (
        <div className="header">
            <div className="container">
                <div>
                    <img src={logo} />
                    <ul>
                        <li onClick={() => window.open("https://ziskprotocol.com/", "_blank")}>Home</li>
                        <li onClick={() => props.handleMode("swap")}>Swap</li>
                        <li onClick={() => props.handleMode("pools")}>Pools</li>
                        <li onClick={() => props.handleMode("lock")}>Lock</li>
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