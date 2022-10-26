import React from "react";
import logo from "./logo.svg";
import "./css/app.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import background from "./images/background.png";
import Swap from "./components/Swap";
import Pools from "./components/Pools";
import Lock from "./components/Lock";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [mode, setMode] = React.useState("swap");

  const [menu, setMenu] = React.useState(false);

  function handleMode(e) {
    setMode(e);
    menu && setMenu(false);
  }

  function handleMenu() {
    setMenu((prevState) => !prevState);
  }

  const location = useLocation()

  React.useEffect(() => {
    setMenu(false)
  }, [location])

  return (
    <div className="app">
      <Header handleMode={handleMode} menu={menu} handleMenu={handleMenu} />
      <Menu handleMode={handleMode} menu={menu} />
      <img className="background" src={background} />
      <Routes>
        <Route path="/swap" element={<Swap />} />
        <Route path="/pools" element={<Pools />} />
        <Route path="/lock" element={<Lock />} />
      </Routes>
    </div>
  );
}

export default App;
