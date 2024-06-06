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
import SelectDays from "../components/CoinPage/SelectDays/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import ToggleComponent from "../components/CoinPage/ToggleComponent/ToggleComponent";
import Footer from "../components/Common/Footer/Footer";

const Coin = () => {
  const { coinId } = useParams();
  
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState({});
  const [pricesType, setPricesType] = useState("prices");

  const fetchCoins = async () => {
    const coinData = await getCoinData(coinId);
    if (coinData) {
      settingCoinObject(coinData, setCoinData);
      const prices = await getCoinPrices(coinId, days ,  pricesType);
      if (prices) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  };


  
  useEffect(() => {
    if (coinId) {
      fetchCoins();
    }
  }, [coinId]);

  const handleDaysChange = async (event) => {
    setDays(event.target.value);
    const prices = await getCoinPrices(coinId, event.target.value , pricesType);
    if (prices) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };
  const handleChangePricesType = async(event, newType) => {
    setPricesType(newType);
    const prices = await getCoinPrices(coinId, days , newType);
    if (prices) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };
  
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
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <ToggleComponent pricesType={pricesType} handleChangePricesType={handleChangePricesType} />
            <LineChart chartData={chartData} priceType={pricesType} />
          </div>
          <Info name={coinData.name} desc={coinData.desc} />
          <Footer/>
        </>
      )}
    </div>
  );
};

export default Coin;
