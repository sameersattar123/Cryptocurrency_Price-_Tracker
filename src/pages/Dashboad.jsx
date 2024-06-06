import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Tabs from "../components/Dashboad/Tabs/Tabs";
import Search from "../components/Dashboad/Search/Search";
import PaginationControlled from "../components/Dashboad/Pagination/Pagination";
import Loader from "../components/Common/Loader/Loader";
import TopButton from "../components/Common/TopButton/TopButton";
import { get100Coins } from "../functions/get100Coins";
import Footer from "../components/Common/Footer/Footer";

const Dashboad = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  const getData = async () => {
   const coins = await get100Coins()
   if (coins) {
     setCoins(coins);
     setPaginatedCoins(coins.slice(0, 10));
     setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <Tabs coins={search ? filterCoins : paginatedCoins} />
          {!search && (
            <PaginationControlled
            page={page}
            handlePageChange={handlePageChange}
            />
          )}
        </div>
      )}
      <TopButton/>
      <Footer/>
    </>
  );
};

export default Dashboad;
