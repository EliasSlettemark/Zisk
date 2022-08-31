import React from "react"
import choose from "../css/choose.css"
import USDC from "../icons/USDC.png"
import ETH from "../icons/ETH.png"
import USDT from "../icons/USDT.png"
import ZISK from "../icons/ZISK.png"

export default function Choose(props){

    return (
        <div className="choose">
            <div className="container" onClick={() => props.changeMode({name: "normal", input: "USDC"})}>
                <img src={USDC} />
                <div>
                    <h1>USDC</h1>
                    <p>USDC</p>
                </div>
            </div>
            <div className="container" onClick={() => props.changeMode({name: "normal", input: "ETH"})}>
                <img src={ETH} />
                <div>
                    <h1>ETH</h1>
                    <p>ETH</p>
                </div>
            </div>
            <div className="container" onClick={() => props.changeMode({name: "normal", input: "USDT"})}>
                <img src={USDT} />
                <div>
                    <h1>USDT</h1>
                    <p>USDT</p>
                </div>
            </div>
            <div className="container" onClick={() => props.changeMode({name: "normal", input: "ZISK"})}>
                <img src={ZISK} />
                <div>
                    <h1>ZISK</h1>
                    <p>ZISK</p>
                </div>
            </div>
        </div>
    )
}