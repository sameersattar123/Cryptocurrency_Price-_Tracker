import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Tabs from "../components/Dashboad/Tabs/Tabs";
import Search from "../components/Dashboad/Search/Search";
import PaginationControlled from "../components/Dashboad/Pagination/Pagination";

const Dashboad = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);

  const handlePageChange = (event, value) => {
    setPage(value);
    const initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };

  const filterCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
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
      setCoins(data);
      setPaginatedCoins(response.data.slice(0, 10));
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
      <Search search={search} onSearchChange={onSearchChange} />
      <Tabs coins={search ? filterCoins : paginatedCoins} />
      {!search && (
        <PaginationControlled page={page} handlePageChange={handlePageChange} />
      )}
    </div>
  );
};

export default Dashboad;
