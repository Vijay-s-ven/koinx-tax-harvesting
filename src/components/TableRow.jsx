export default function TableRow({ asset, selected, onSelect }) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onSelect(asset)}
        />
      </td>

      <td>{asset.coinName}</td>
      <td>{asset.totalHoldings}</td>
      <td>${asset.currentPrice}</td>

      <td className={asset.stcg.gain > 0 ? "green" : "red"}>
        {asset.stcg.gain}
      </td>

      <td className={asset.ltcg.gain > 0 ? "green" : "red"}>
        {asset.ltcg.gain}
      </td>
    </tr>
  );
}