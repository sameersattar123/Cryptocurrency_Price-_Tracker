import { gettingDate } from "./getDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices1.map((price) => gettingDate(price[0])),
      datasets: [
        {
          label : "crypto 1",
          data: prices1?.map((data) => data[1]),
          borderWidth: 3,
          fill: false,
          tension: 0.25,
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto2",
        },
        {
          label : "crypto 2",
          data: prices2?.map((data) => data[1]),
          borderWidth: 3,
          fill: false,
          tension: 0.25,
          borderColor: "#61c69f",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price) => gettingDate(price[0])),
      datasets: [
        {
          label : "crypto 1",
          data: prices1?.map((data) => data[1]),
          borderWidth: 3,
          fill: true,
          backgroundColor: "rgba(58, 128, 233,0.1)",
          tension: 0.25,
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
