import React from "react";
import "./style.css";
import Button from "../../Common/Button/Button";
import phone from "../../../assets/iphone.png"
import gradient from "../../../assets/gradient.png"

const MainComponent = () => {
  return (
    <div className="flex-info">
      <div className="left-component">
        <h1 className="track-cypto-heading">Track Crypto</h1>
        <h1 className="real-time-heading">
          Real Time<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
        <p>
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </p>
        <div className="btn-flex">
          <Button text={"Dashboard"} outlined={false} />
          <Button text={"Share App"} outlined={true} />
        </div>
      </div>
      <div className="phone-container">
        <img src={phone} alt="" className="iphone" />
        <img src={gradient} alt="" className="gradient" />
      </div>
    </div>
  );
};

export default MainComponent;
