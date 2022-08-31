import React from "react";
import waiting from "../css/waiting.css";
import loading from "../icons/line-md_loading-twotone-loop.png";
import exit from "../icons/exit.png"

export default function Waiting(props) {
  return (
    <div className="waiting">
      <img onClick={() => props.changeMode({name: "confirm"})} className="exit" src={exit} />
      <div className="container">
        <img src={loading} />
        <h1>Waiting for confirmation</h1>
        <p>
          Supplying 0.001588 ETH and 1.23224 ZISK
          <br />
          Confirm this transaction in your Wallet
        </p>
      </div>
    </div>
  );
}
