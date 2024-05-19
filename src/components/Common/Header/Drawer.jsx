import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./style.css";

export default function Drawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="button" />
      </IconButton>
      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <div className="drawer-component">
          <a href="/">
            <p className="link">Home</p>
          </a>
          <a href="/">
            <p className="link">Compare</p>
          </a>
          <a href="/">
            <p className="link">WatchList</p>
          </a>
          <a href="/">
            <p className="link">Dasboard</p>
          </a>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
