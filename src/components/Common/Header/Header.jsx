import React from "react";
import "./style.css";
import Drawer from "./Drawer";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker
        <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/">
          <p className="link">Compare</p>
        </a>
        <a href="/">
          <p className="link">WatchList</p>
        </a>
        <a href="#">
          <Button outlined={false} onClick={() => console.log("sameer sattar")} text={"Dashboard"} />
        </a>
      </div>
      <div className="drawer">
        <Drawer />
      </div>
    </div>
  );
};

export default Header;
