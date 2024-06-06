import React from "react";
import "./style.css";
import Drawer from "./Drawer";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker
        <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/dashboard">
          <Button
            outlined={false}
            onClick={() => console.log("sameer sattar")}
            text={"Dashboard"}
          />
        </Link>
      </div>
      <div className="drawer">
        <Drawer />
      </div>
    </div>
  );
};

export default Header;
