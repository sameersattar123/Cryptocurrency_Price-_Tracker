export const getCoinPrices = async (coinId, days, priceType) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-1rTY7bAAmtSJvAmMYxnT1jJE",
    },
  };
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
      options
    );
    const data = await response.json();
    console.log(data);
    if (priceType == "market_caps") {
      return data.market_caps;
    } else if (priceType == "total_volumes") {
      return data.total_volumes;
    } else {
      return data.prices;
    }
  } catch (error) {
    console.log(error.message);
  }
};
