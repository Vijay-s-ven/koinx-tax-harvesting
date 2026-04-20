export default function GainCard({ title, data, highlight }) {
  if (!data) return null;

  const net =
    data.stcg.profit +
    data.stcg.loss +
    data.ltcg.profit +
    data.ltcg.loss;

  return (
    <div className={`card ${highlight ? "blue" : ""}`}>
      <h2>{title}</h2>

      <div className="row">
        <span>Profits</span>
        <span>₹ {data.stcg.profit + data.ltcg.profit}</span>
      </div>

      <div className="row">
        <span>Losses</span>
        <span>₹ {data.stcg.loss + data.ltcg.loss}</span>
      </div>

      <div className="row">
        <strong>Net Capital Gains</strong>
        <strong>₹ {net}</strong>
      </div>

      <h3 style={{ marginTop: "10px" }}>
        Realised Capital Gains: ₹ {net}
      </h3>
    </div>
  );
}