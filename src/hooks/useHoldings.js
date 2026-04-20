import { useEffect, useState } from "react";
import { fetchHoldings } from "../services/api";

export default function useHoldings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchHoldings().then(setData);
  }, []);

  return data;
}