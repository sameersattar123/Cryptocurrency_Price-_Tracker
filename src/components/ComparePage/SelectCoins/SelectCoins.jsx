import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { get100Coins } from "../../../functions/get100Coins";
import "./style.css";

const SelectCoins = ({crypto1, crypto2, handleCoinChange}) => {

  const [AllCoins, setAllCoins] = useState([]);

  const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  const getData = async () => {
    const coins = await get100Coins();
    setAllCoins(coins);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <div className="select-flex">
        <p>Crypto 1</p>
        <Select
          sx={style}
          value={crypto1}
          label="Crypto 1"
          onChange={(e) => handleCoinChange(e, false)}
        >
          {AllCoins.map((coin) => {
            return (
              <MenuItem value={coin.id} key={coin.id}>
                {coin.name}
              </MenuItem>
            );
          })}
        </Select>
        <p>Crypto 2</p>
        <Select
          sx={style}
          value={crypto2}
          label="Crypto 1"
          onChange={(e) => handleCoinChange(e, true)}
        >
          {AllCoins.map((coin) => {
            return (
              <MenuItem value={coin.id} key={coin.id}>
                {coin.name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
    </div>
  );
};

export default SelectCoins;
