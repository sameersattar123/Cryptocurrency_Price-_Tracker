import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker
        <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a  href="/">
          <p className="link">Home</p>
        </a>
        <a  href="/">
          <p className="link">Compare</p>
        </a>
        <a  href="/">
          <p className="link">WatchList</p>
        </a>
        <a  href="/">
          <p className="link">Dasboard</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
