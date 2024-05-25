import React from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const Grid = ({ coin }) => {
  return (
    <div className="grid-container">
      <div className="info-flex">
        <img src={coin.image} alt="image" className="coin-image" />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>
      <div className="chip-flex">
        <div
          className={
            coin.price_change_percentage_24h > 0
              ? "coin-price-green"
              : "coin-price-red"
          }
        >
          {coin.price_change_percentage_24h.toFixed(3)}%
        </div>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="icon-chip-green">
            <TrendingUpIcon />
          </div>
        ) : (
          <div className="icon-chip-red">
            <TrendingDownIcon />
          </div>
        )}
      </div>
      <div className="info-container">
        <h3
          className={
            coin.price_change_percentage_24h > 0 ? "price-green" : "price-red"
          }
        >
          ${coin.current_price.toLocaleString()}
        </h3>
        <p className="total-volume">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="market-cap">
          Market Cap : {coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Grid;
