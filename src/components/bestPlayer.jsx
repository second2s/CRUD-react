import React, { useEffect, useState } from "react";

export default function BestPlayers() {
  const [bestPlayers, setBestPlayers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3000/users");

        if (!res.ok) throw new Error("Error cargando users");

        const usersData = await res.json();
        const orderedPlayers = [...usersData].sort(
          (a, b) =>
            (b.betsWon / b.betsCount) * 100 - (a.betsWon / a.betsCount) * 100
        );

        setBestPlayers(orderedPlayers.slice(0, 5));
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <ul>
      {bestPlayers.map((player, index) => (
        <li className="li-sryle" key={player.id}>
          top {index + 1}: {player.name} - WR %
          {((player.betsWon / player.betsCount) * 100).toFixed(0)}
        </li>
      ))}
    </ul>
  );
}
