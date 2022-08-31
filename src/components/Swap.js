import React from "react"
import Normal from "./Normal"
import Choose from "./Choose"
import Confirm from "./Confirm"
import Waiting from "./Waiting"
import Settings from "./Settings"

export default function Swap(){

    const [mode, setMode] = React.useState("normal")

    const [input, setInput] = React.useState(undefined)

    const [inputs, setInputs] = React.useState(["USDC", "ZISK"])

    const [confirm, setConfirm] = React.useState()

    function changeMode(e){
        if(e.name === "normal"){
            if(e.input){
            if(input === 0){
                setInputs(prevState => [e.input, prevState[1]])
            }else{
                setInputs(prevState => [prevState[0], e.input])
            }
        }
            setMode("normal")
        }else if (e.name === "choose"){
            setInput(e.input)
            setMode("choose")
        }else if(e.name === "confirm"){
            if(e.confirm){
                setConfirm(e.confirm)
            }
            setMode("confirm")
        }else if (e.name === "waiting"){
            setMode("waiting")
        }else if(e.name === "settings"){
            setMode("settings")
        }
    }

    return (
        <div>
            {mode === "normal" && <Normal changeMode={changeMode} inputs={inputs} />}
            {mode === "choose" &&  <Choose changeMode={changeMode} input={input} />}
            {mode === "confirm" &&  <Confirm changeMode={changeMode} confirm={confirm} />}
            {mode === "waiting" &&  <Waiting changeMode={changeMode} input={input} />}
            {mode === "settings" &&  <Settings changeMode={changeMode} />}
        </div>
    )
}