import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./style.css"

function Footer() {
  return (
    <div className="footer">
      <h2 className="logo">
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://facebook.com">
          <FacebookIcon className="social-link" />
        </a>
        <a href="https://www.twitter.com">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
