import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import SelectCoins from "../components/ComparePage/SelectCoins/SelectCoins";
import SelectDays from "../components/CoinPage/SelectDays/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getPrices";
import { settingCoinObject } from "../functions/settingCoinObject";
import { settingChartData } from "../functions/settingChartData";
import Loader from "../components/Common/Loader/Loader";
import List from "../components/Dashboad/List/List";
import Info from "../components/CoinPage/Info/Info";
import LineChart from "../components/CoinPage/LineChart/LineChart";
import ToggleComponent from "../components/CoinPage/ToggleComponent/ToggleComponent";

const Compare = () => {
  const [loading, setLoading] = useState(false);
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  console.log(crypto1Data);
  console.log(crypto2Data);

  const [days, setDays] = useState(7);
  const handleDaysChange = async (event) => {
    setDays(event.target.value);
    const price1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const price2 = await getCoinPrices(crypto2, event.target.value, priceType);
    settingChartData(setChartData, price1, price2);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const coin1 = await getCoinData(crypto1);
    const coin2 = await getCoinData(crypto2);

    if (coin1) {
      settingCoinObject(coin1, setCrypto1Data);
    }
    if (coin2) {
      settingCoinObject(coin2, setCrypto2Data);
    }

    if (coin1 && coin2) {
      const price1 = await getCoinPrices(crypto1, days, priceType);
      const price2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(setChartData, price1, price2);
      setLoading(false);
    }
  };

  const handleCoinChange = async (event, isCoin) => {
    setLoading(true);
    if (isCoin) {
      setCrypto2(event.target.value);
      const coinData = await getCoinData(event.target.value);
      settingCoinObject(coinData, setCrypto2Data);
      const price1 = await getCoinPrices(crypto1, days, priceType);
      const price2 = await getCoinPrices(crypto2, days, priceType);
      if (price1.length > 0 && price2.length > 0) {
        console.log(price1, price2);
        settingChartData(setChartData, price1, price2);
      }
    } else {
      setCrypto1(event.target.value);
      const coinData = await getCoinData(event.target.value);
      settingCoinObject(coinData, setCrypto1Data);
    }

    setLoading(false);
  };

  const handleChangePricesType = async (event, newType) => {
    setPriceType(newType);
    const price1 = await getCoinPrices(crypto1, days, newType);
    const price2 = await getCoinPrices(crypto2, days, newType);
    settingChartData(setChartData, price1 , price2);
    setLoading(false);
  };
  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="coin-days-flex">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noTag={true}
            />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto2Data} />
          </div>
          <div className="grey-wrapper">
            <ToggleComponent
              pricesType={priceType}
              handleChangePricesType={handleChangePricesType}
            />
            <LineChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <Info name={crypto1Data.name} desc={crypto1Data.desc} />
          <Info name={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
};

export default Compare;
