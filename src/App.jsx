import { useState } from "react";
import useHoldings from "./hooks/useHoldings";
import useCapitalGains from "./hooks/useCapitalGains";
import GainCard from "./components/GainCard";
import HoldingsTable from "./components/HoldingsTable";
import { calculateGains } from "./utils/calculations";

export default function App() {
  const holdings = useHoldings();
  const gains = useCapitalGains();
  const [selected, setSelected] = useState([]);

  const updated = gains ? calculateGains(selected, gains) : null;

  if (!gains) return <p>Loading...</p>;

  const preNet =
    gains.stcg.profit +
    gains.stcg.loss +
    gains.ltcg.profit +
    gains.ltcg.loss;

  const postNet = updated?.net || 0;
  const savings = preNet - postNet;

  return (
    <div>
      <h1>
        Tax Harvesting <span style={{ color: "blue" }}>How it works?</span>
      </h1>

      <div className="cards">
        <GainCard title="Pre Harvesting" data={gains} />
        <GainCard title="After Harvesting" data={updated} highlight />
      </div>

      {savings > 0 && (
        <p style={{ color: "green", marginTop: "10px" }}>
          🎉 You are going to save ₹{savings}
        </p>
      )}

      <div className="table-container">
        <h2>Holdings</h2>
        <HoldingsTable
          data={holdings}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </div>
  );
}