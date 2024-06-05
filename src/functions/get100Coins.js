export const get100Coins = async () => {
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
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
