import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home";
import WatchList from "./pages/WatchList";
import Dashboad from "./pages/Dashboad";
import Compare from "./pages/Compare";
import Coin from "./pages/Coin";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<Coin />} />
          <Route path="/dashboard" element={<Dashboad />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
