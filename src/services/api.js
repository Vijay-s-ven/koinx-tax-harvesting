export const fetchHoldings = () => {
  return Promise.resolve([
    {
      coinName: "Bitcoin",
      totalHoldings: 0.5,
      currentPrice: 35000,
      stcg: { gain: 2000 },
      ltcg: { gain: -1000 },
    },
    {
      coinName: "Ethereum",
      totalHoldings: 2,
      currentPrice: 1800,
      stcg: { gain: -500 },
      ltcg: { gain: -1000 },
    },
  ]);
};

export const fetchCapitalGains = () => {
  return Promise.resolve({
    stcg: { profit: 5000, loss: -2000 },
    ltcg: { profit: 3000, loss: -1000 },
  });
};