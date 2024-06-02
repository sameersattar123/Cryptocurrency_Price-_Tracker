import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header/Header";
import Loader from "../components/Common/Loader/Loader";
import { settingCoinObject } from "../functions/settingCoinObject";
import List from "../components/Dashboad/List/List";

const Coin = () => {
  const { coinId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState([])

  const fetchCoins = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-1rTY7bAAmtSJvAmMYxnT1jJE",
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        options
      );
      const data = await response.json();
      console.log(data);
      settingCoinObject(data , setCoinData)
      setIsLoading(false)
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grey-wrapper">
          <List
          coin={coinData}
          />
        </div>
      )}
    </div>
  );
};

export default Coin;
