import React from "react"
import homescreen from "../css/normal.css"
import settings from "../icons/heroicons-outline_cog.png"
import arrow from "../icons/arrow.png"
import CaretDown from "../icons/CaretDown.png"
import USDC from "../icons/USDC.png"
import ETH from "../icons/ETH.png"
import USDT from "../icons/USDT.png"
import ZISK from "../icons/ZISK.png"

export default function Normal(props){

    const [input1, setInput1] = React.useState("0.0")

    const [input2, setInput2] = React.useState("0.0")

    return (
        <div className="normal">
        <div className="header">
            <h1>Swap</h1>
            <img onClick={() => props.changeMode({name: "settings"})} src={settings} />
        </div>
        <div className="container">
            <div className="input1">
                <input onChange={(e) => setInput1(e.target.value)} placeholder="0.0" />
                <div onClick={() => props.changeMode({name: "choose", input: 0})}>
                    <img className="icon" src={require(`../icons/${props.inputs[0]}.png`)} />
                    <h1>{props.inputs[0]}</h1>
                    <img className="caretdown" src={CaretDown} />
                </div>
            </div>
            <img className="arrow" src={arrow} />
            <div className="input2">
                <input onChange={(e) => setInput2(e.target.value)} placeholder="0.0" />
                <div onClick={() => props.changeMode({name: "choose", input: 1})}>
                    <img className="icon" src={require(`../icons/${props.inputs[1]}.png`)} />
                    <h1>{props.inputs[1]}</h1>
                    <img className="caretdown" src={CaretDown} /> 
                </div>
            </div>
            <button onClick={() => props.changeMode({name: "confirm", confirm: [{value: input1, name: props.inputs[0]}, {value: input2, name: props.inputs[1]}]})} className="button">Confirm</button>
        </div>
    </div>
    )
}