import React, { useEffect, useState } from "react";

export default function BetsData() {
  const [stats, setStats] = useState({
    betsCount: 0,
    betsTotal: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const resBets = await fetch("http://localhost:3000/bets");

        if (!resBets.ok) throw new Error("Error cargando bets");

        const bets = await resBets.json();

        setStats({
          betsCount: bets.length,
          betsTotal: bets.reduce((acc, bet) => acc + bet.amount, 0),
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <h3>Bets: {stats.betsCount}</h3>
      <h3>Total bet: ${stats.betsTotal}</h3>
    </>
  );
}
