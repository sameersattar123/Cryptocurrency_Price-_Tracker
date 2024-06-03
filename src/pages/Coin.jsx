import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header/Header";
import Loader from "../components/Common/Loader/Loader";
import { settingCoinObject } from "../functions/settingCoinObject";
import List from "../components/Dashboad/List/List";
import Info from "../components/CoinPage/Info/Info";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getPrices";
import LineChart from "../components/CoinPage/LineChart/LineChart";
import { gettingDate } from "../functions/getDate";

const Coin = () => {
  const { coinId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({})

  const fetchCoins = async () => {
    const coinData = await getCoinData(coinId);
    if (coinData) {
      settingCoinObject(coinData , setCoinData)
      const prices = await getCoinPrices(coinId , days)
      if (prices ) {
        setChartData({
          labels : prices.map((price) => gettingDate(price[0])),
          datasets : [
            {
              data: prices?.map((data) => data[1]),
              borderWidth: 3,
              fill: true,
              backgroundColor: "rgba(58, 128, 233,0.1)",
              tension: 0.25,
              borderColor: "#3a80e9",
              pointRadius: 0,
            }
          ]
        })
        setIsLoading(false)
      }
    }
  };

  useEffect(() => {
    if (coinId) {
      fetchCoins();
    }
  }, [coinId]);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <LineChart 
            chartData={chartData}
            />
          </div>
          <Info name={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
};

export default Coin;
