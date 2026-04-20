import TableRow from "./TableRow";

export default function HoldingsTable({ data, selected, setSelected }) {
  const toggle = (asset) => {
    if (selected.includes(asset)) {
      setSelected(selected.filter((a) => a !== asset));
    } else {
      setSelected([...selected, asset]);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Asset</th>
          <th>Holdings</th>
          <th>Price</th>
          <th>Short-Term</th>
          <th>Long-Term</th>
        </tr>
      </thead>
      <tbody>
        {data.map((asset, i) => (
          <TableRow
            key={i}
            asset={asset}
            selected={selected.includes(asset)}
            onSelect={toggle}
          />
        ))}
      </tbody>
    </table>
  );
}