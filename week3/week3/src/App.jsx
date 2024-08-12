import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="nav-list">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
          
          <div className="nav-logo">
            <button id="nav-btn"></button>
          </div>
        </div>

        <div className="content"></div>
      </div>
    </>
  );
}

export default App;
