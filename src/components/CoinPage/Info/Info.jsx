import React, { useState } from "react";
import "./style.css";

const Info = ({ name, desc }) => {
  const [toggle, setToggle] = useState();
  const shortDesc =
    desc.slice(0, 350) +
    "<br/><p style='color:var(--grey);cursor:pointer;'>Read More...</p>";
  const longDesc =
    desc + "<br/><p style='color:var(--grey);cursor:pointer;'>Read Less...</p>";
  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-name">{name}</h2>
      {desc.length > 350 ? (
        <p
          className="coin-info-desc"
          onClick={() => setToggle(!toggle)}
          dangerouslySetInnerHTML={{
            __html: !toggle ? shortDesc : longDesc,
          }}
        />
      ) : (
        <p
          dangerouslySetInnerHTML={{
            __html: longDesc,
          }}
        />
      )}
    </div>
  );
};

export default Info;
