import { useState } from "react";
import "./App.css";
import FotoGw from './assets/Aryaem.svg'

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="container">
        {showNav === true && (
          <div className="nav-list">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        )}

        <div className="nav-logo">
          <button id="nav-btn" onClick={() => setShowNav(!showNav)}></button>
        </div>

        <div className="content">
          <div className="main-content"></div>
          <div className="main-img">
            <img src={FotoGw} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
