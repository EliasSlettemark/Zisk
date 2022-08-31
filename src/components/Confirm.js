import React from "react";
import confirm from "../css/confirm.css";
import back from "../icons/back.png";
import exit from "../icons/exit.png";
import switchvertical from "../icons/heroicons-outline_switch-vertical.png"

export default function Confirm(props) {

  return (
    <div className="confirm">
      <div className="header">
        <img
          className="back"
          onClick={() => props.changeMode({ name: "normal" })}
          src={back}
        />
        <img
          className="exit"
          onClick={() => props.changeMode({ name: "normal" })}
          src={exit}
        />
      </div>
      <div className="container">
        <div className="from">
          <h1>From</h1>
          <div>
            <h1>{props.confirm[0].value}</h1>
            <h1>{props.confirm[0].name}</h1>
            <img src={require(`../icons/${props.confirm[0].name}.png`)} />
          </div>
        </div>
        <div className="to">
          <h1>To</h1>
          <div>
            <h1>{props.confirm[1].value}</h1>
            <h1>{props.confirm[1].name}</h1>
            <img src={require(`../icons/${props.confirm[1].name}.png`)} />
          </div>
        </div>
        <p>Output is estimated. If the price changes by more than 0.5% yout transaction will revert.</p>
        <div className="information">
            <div>
                <small>Price</small>
                <small>0.0021672 ETH per ZISK <img src={switchvertical} /></small>
            </div>
            <div>
                <small>Minimum received </small>
                <small>9.74 ZISK</small>
            </div>
            <div>
                <small>Price Impact</small>
                <small>&lt;0.01%</small>
            </div>
            <div>
                <small>Liquidity Provider Fee</small>
                <small>0.000066ETH</small>
            </div>
        </div>
        <button onClick={() => props.changeMode({name: "waiting"})} className="button">Confirm</button>
      </div>
    </div>
  );
}
