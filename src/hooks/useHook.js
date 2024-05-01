import { useState, useEffect } from "react";
import axios from "../api";

export function useFetch(api, ...rest) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(api)
      .then((res) => setData(res))
      .catch((err) => setError(err));
  }, [...rest]);
  return { data, error };
}
