import React from "react"
import pools from "../css/pools.css"
import Pool from "./Pool"

export default function Pools(){
    return (
        <div className="pools">
            <Pool title="ZISK" percentage="19,245%" number="0" usdamount="-0 USD" button="Enable" />
            <Pool title="ZISK/USDC LP" percentage="19,245%" number="0" usdamount="-0 USD" button="Zap" />
            <Pool title="USDC" percentage="19,245%" number="0" usdamount="-0 USD" button="Enable" />
        </div>
    )
}