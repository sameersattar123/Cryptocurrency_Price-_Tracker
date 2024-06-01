import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Tabs from "../components/Dashboad/Tabs/Tabs";
import Search from "../components/Dashboad/Search/Search";

const Dashboad = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("")

  const filterCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()) )
  const onSearchChange = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }
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
      <Search search={search} onSearchChange={onSearchChange} />
      <Tabs coins={filterCoins} />
    </div>
  );
};

export default Dashboad;
