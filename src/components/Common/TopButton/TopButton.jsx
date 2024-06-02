import React from 'react'
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import "./style.css"

const TopButton = () => {
  let mybutton = document.getElementById("top-btn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
  return (
    <div
      className="top-btn"
      id="top-btn"
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      <ExpandLessRoundedIcon style={{color : "var(--blue)"}} />
    </div>
  );
}

export default TopButton