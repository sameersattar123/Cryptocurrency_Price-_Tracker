import React from "react";
import "./style.css";
import Button from "../../Common/Button/Button";
import phone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";

const MainComponent = () => {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="track-cypto-heading"
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
          className="real-time-heading"
        >
          Real Time<span style={{ color: "var(--blue)" }}>.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="info-text"
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <Button text={"Dashboard"} outlined={false} />
          <Button text={"Share App"} outlined={true} />
        </motion.div>
      </div>
      <div className="phone-container">
        <img src={gradient} alt="" className="gradient" />
        <motion.img
          src={phone}
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          alt=""
          className="iphone"
        />
      </div>
    </div>
  );
};

export default MainComponent;
