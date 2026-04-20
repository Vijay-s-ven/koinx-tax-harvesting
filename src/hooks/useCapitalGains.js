import { useEffect, useState } from "react";
import { fetchCapitalGains } from "../services/api";

export default function useCapitalGains() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchCapitalGains().then(setData);
  }, []);

  return data;
}