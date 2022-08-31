import React from "react"
import logo from './logo.svg'
import "./css/app.css"
import Header from "./components/Header"
import Menu from "./components/Menu"
import background from "./images/background.png"
import Swap from "./components/Swap"
import Pools from "./components/Pools"
import Lock from "./components/Lock"

function App() {

  const [mode, setMode] = React.useState("home")

  const [menu, setMenu] = React.useState(false)

  function handleMode(e){
    setMode(e)
    menu && setMenu(false)
  }

  function handleMenu(){
    setMenu(prevState => !prevState)
  }

  return (
    <div className="app">
      <Header handleMode={handleMode} menu={menu} handleMenu={handleMenu} />
      <Menu handleMode={handleMode} menu={menu} />
      <img className="background" src={background} />
      {mode === "swap" && <Swap />}
      {mode === "pools" && <Pools />}
      {mode === "lock" && <Lock />}
    </div>
  );
}

export default App;
