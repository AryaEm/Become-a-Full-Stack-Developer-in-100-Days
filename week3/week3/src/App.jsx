import { useState } from "react";
import "./App.css";
import FotoGw from "./assets/Aryaem.svg";

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
          <div className="main-content">
            <div className="content-wrap">
              <h2>React js</h2>
              <p>
                React adalah libray JavaScript yang digunakan untuk membangun
                user interface yang interaktif berbasis component. React yang
                dibuat oleh Facebook dan bersifat open source, sehingga dapat
                digunakan oleh siapa saja secara gratis.
              </p>
              <div className="start-btn">
                <button>Get Started</button>
              </div>
            </div>
          </div>
          <div className="main-img">
            <img src={FotoGw} alt="" />
          </div>

          <div className="box1"></div>
          <div className="box2"></div>
        </div>
      </div>
    </>
  );
}

export default App;
