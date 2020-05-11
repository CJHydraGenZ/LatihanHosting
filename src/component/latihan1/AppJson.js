import React, { useEffect, useState } from "react";
import { Animations } from "./skeleton";
export function AppJs() {
  const [data, setData] = useState({
    results: [],
  });
  const [loading, setLoading] = useState(false);

  // console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      const result = await res.json();
      // console.log(result);
      setData({
        results: result,
      });
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <h2>hello world</h2>
      {loading && <Animations />}
      {data.results.map((data, index) => (
        <li key={index}>{data.title}</li>
      ))}
    </>
  );
}
