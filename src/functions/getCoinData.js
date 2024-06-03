export const getCoinData = async (coinId) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-1rTY7bAAmtSJvAmMYxnT1jJE",
    },
  };

  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data
  } catch (error) {
    console.log(error.message);
  }
};
