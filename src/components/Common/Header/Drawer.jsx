import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./style.css";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/compare">
            <p className="link">Compare</p>
          </Link>
          <Link to="/watchlist">
            <p className="link">WatchList</p>
          </Link>
          <Link to="/dashboard">
            <p className="link">Dasboard</p>
          </Link>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
