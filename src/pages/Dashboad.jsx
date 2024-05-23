import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Tabs from "../components/Dashboad/Tabs/Tabs";

const Dashboad = () => {
  const [coins, setCoins] = useState([]);

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
       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
       options
     );
     const data = await response.json();
     console.log(data);
     setCoins(data);
   } catch (error) {
      console.log(error.message)
   }  
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      <Header />
      <Tabs coins={coins} />
    </div>
  );
};

export default Dashboad;
