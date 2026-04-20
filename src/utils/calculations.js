export const calculateGains = (selected, baseGains) => {
  let stProfit = baseGains.stcg.profit;
  let stLoss = baseGains.stcg.loss;
  let ltProfit = baseGains.ltcg.profit;
  let ltLoss = baseGains.ltcg.loss;

  selected.forEach((asset) => {
    if (asset.stcg.gain > 0) stProfit += asset.stcg.gain;
    else stLoss += asset.stcg.gain;

    if (asset.ltcg.gain > 0) ltProfit += asset.ltcg.gain;
    else ltLoss += asset.ltcg.gain;
  });

  return {
    stcg: { profit: stProfit, loss: stLoss },
    ltcg: { profit: ltProfit, loss: ltLoss },
    net: stProfit + stLoss + ltProfit + ltLoss,
  };
};