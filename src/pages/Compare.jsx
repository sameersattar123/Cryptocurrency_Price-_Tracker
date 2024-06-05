import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import SelectCoins from "../components/ComparePage/SelectCoins/SelectCoins";
import SelectDays from "../components/CoinPage/SelectDays/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getPrices";
import { settingCoinObject } from "../functions/settingCoinObject";
import { settingChartData } from "../functions/settingChartData";
import Loader from "../components/Common/Loader/Loader";

const Compare = () => {
  const [loading, setLoading] = useState(false);
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [priceType, setSriceType] = useState("prices");

  const [days, setDays] = useState(30);
  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
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

      if (price1.length > 0 && price2.length > 0) {
        console.log(price1, price2);
        // settingChartData(setChartData, prices);
        setLoading(false);
      }
    }
  };

  const handleCoinChange = async (event, isCoin) => {
    if (isCoin) {
      setLoading(true);
      setCrypto2(event.target.value);
      const coinData = await getCoinData(event.target.value);
        settingCoinObject(coinData, setCrypto2Data);
    } else {
      setCrypto1(event.target.value);
      const coinData = await getCoinData(event.target.value);
        settingCoinObject(coinData, setCrypto1Data);
    }

    const price1 = await getCoinPrices(event.target.value, days, priceType);
    const price2 = await getCoinPrices(event.target.value, days, priceType);
  };
  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
};

export default Compare;
