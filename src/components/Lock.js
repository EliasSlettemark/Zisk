import React from "react"
import lock from "../css/lock.css"
import lockclosed from "../icons/heroicons-outline_lock-closed.png"

export default function Lock(){

    const [crypto, setCrypto] = React.useState("ZISK")

    const [lockupLength, setLockupLength] = React.useState("7days")

    const [input, setInput] = React.useState("")

    return (
        <div className="lock">
            <div className="header">
                <h1>Lock ZISK LP</h1>
                <img src={lockclosed} />
            </div>
            <div className="container">
                <div className="box">
                    <button onClick={() => setCrypto("ZISK")} className={crypto === "ZISK" ? "active" : undefined}><span>ZISK</span><br></br>Single Sided Staking</button>
                    <button onClick={() => setCrypto("ZISK/USDC")} className={crypto === "ZISK/USDC" ? "active" : undefined}><span>ZISK/USDC</span><br></br>ZISK Liquidity Staking</button>
                </div>
                <div className="lockupLength">
                    <h1>Lockup Length</h1>
                    <div>
                        <button onClick={() => setLockupLength("7days")} className={lockupLength === "7days" ? "active" : undefined}>7 days<br></br><span>{crypto === "ZISK" ?  "25% APR" : "50% APR"}</span></button>
                        <button onClick={() => setLockupLength("14days")} className={lockupLength === "14days" ? "active" : undefined}>14 days<br></br><span>{crypto === "ZISK" ?  "50% APR" : "75% APR"}</span></button>
                        <button onClick={() => setLockupLength("30days")} className={lockupLength === "30days" ? "active" : undefined}>30 days<br></br><span>{crypto === "ZISK" ?  "75% APR" : "120% APR"}</span></button>
                        <button onClick={() => setLockupLength("60days")} className={lockupLength === "60days" ? "active" : undefined}>60 days<br></br><span>{crypto === "ZISK" ?  "120% APR" : "200% APR"}</span></button>
                    </div>
                </div>
                <div className="input">
                    <input onChange={(e) => setInput(e.target.value)} placeholder="0.0" />
                    <h1>ZISK</h1>
                </div>
                <button>Zap</button>
            </div>
        </div>
    )
}