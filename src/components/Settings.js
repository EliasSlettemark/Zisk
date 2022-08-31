import React from "react"
import settigs from "../css/settings.css"
import exit from "../icons/exit.png"
import outline_question from "../icons/heroicons-outline_question-mark-circle.png"

export default function Settings(props){

    const [slippageTolerance, setSlippageTolerance] = React.useState("5%")

    const [minutes, setMinutes] = React.useState(0)

    const [slider1, setSlider1] = React.useState(true)
    const [slider2, setSlider2] = React.useState(false)

    return (
        <div className="settings">
            <div className="header">
                <h1>Transaction Settings</h1>
                <img onClick={() => props.changeMode({name: "normal"})} src={exit} />
            </div>
                <div className="container">
                    <div className="section">
                        <small>Slippage tolerance <img src={outline_question} /></small>
                        <div className="slippageTolerance">
                            <small onClick={() => setSlippageTolerance("1%")} className={slippageTolerance === "1%" ? "active" : undefined}>1%</small>
                            <small onClick={() => setSlippageTolerance("5%")} className={slippageTolerance === "5%" ? "active" : undefined}>5%</small>
                            <small onClick={() => setSlippageTolerance("10%")} className={slippageTolerance === "10%" ? "active" : undefined}>10%</small>
                            <small>{slippageTolerance}</small>
                        </div>
                    </div>
                    <div className="section">
                        <small>Transaction Deadline <img src={outline_question} /></small>
                        <div className="transactionDeadline">
                            <input onChange={(e) => setMinutes(e.target.value)} placeholder="0.0" />
                            <h1>Minutes</h1>
                        </div>
                    </div>
                    <div className="sliders">
                    <div className="transactionDeadline">
                        <h1>Transaction Deadline <img src={outline_question} /></h1>
                        <div onClick={() => setSlider1(prevState => !prevState)} className={`slider ${slider1 ? "active" : undefined}`} >
                            <div className="circle"></div>
                        </div>
                    </div>
                    <div className="disableMultihops">
                        <h1>Disable Multihops <img src={outline_question} /></h1>
                        <div onClick={() => setSlider2(prevState => !prevState)} className={`slider ${slider2 ? "active" : undefined}`} >
                            <div className="circle"></div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}