import React from "react";
import "./style.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const List = ({ coin }) => {
  return (
    <tr className="list-row">
      <td className="info-flex">
        <img src={coin.image} alt="image" className="coin-image" />
      </td>
      <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      <td className="chip-flex">
        <div
          className={
            coin.price_change_percentage_24h > 0
              ? "coin-price-green"
              : "coin-price-red"
          }
        >
          {coin.price_change_percentage_24h.toFixed(3)}%
        </div>
        </td>
        <td>
        {coin.price_change_percentage_24h > 0 ? (
          <div className="icon-chip-green td-icon">
            <TrendingUpIcon />
          </div>
        ) : (
          <div className="icon-chip-red td-icon">
            <TrendingDownIcon />
          </div>
        )}
      </td>
      <td className="info-container">
        <h3
          className={
            coin.price_change_percentage_24h > 0 ? "price-green" : "price-red"
          }
        >
          ${coin.current_price.toLocaleString()}
        </h3>
        </td>
        <td>
        <p className="total-volume td-total-volume">
        {coin.total_volume.toLocaleString()}
        </p>
        </td>
        <td>
        <p className="market-cap td-market-cap">
        {coin.market_cap.toLocaleString()}
        </p>
      </td>
    </tr>
  );
};

export default List;
