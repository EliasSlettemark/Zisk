import React from "react"
import pool from "../css/pool.css"
import lockclosed from "../icons/heroicons-outline_lock-closed.png"

export default function Pool(props){
    return (
        <div className="pool">
            <div className="header">
                <div>
                    <h1>{props.title}</h1>
                    <p>Min. Stake 5,000 ZISK</p>
                </div>
                <img src={lockclosed} />
            </div>
            <div className="container">
                <div>
                    <div>
                        <p><span>APY:</span></p>
                        <p>ZISK Earned</p>
                    </div>
                    <small><span>{props.percentage}</span></small>
                </div>
                <div>
                    <div>
                        <small>{props.number}</small>
                        <p><span>{props.usdamount}</span></p>
                        <p>Stake ZISK</p>
                    </div>
                    <button className="collect">Collect</button>
                </div>
                <button>{props.button}</button>
            </div>
        </div>
    )
}