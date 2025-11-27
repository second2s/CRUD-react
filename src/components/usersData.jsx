import React, { useEffect, useState } from "react";

export default function AllData() {
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    suspended: 0,
    banned: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {

        const resUsers = await fetch("http://localhost:3000/users");
        if (!resUsers.ok) throw new Error("Error cargando users");
        const users = await resUsers.json();

        setStats({
          total: users.length,
          active: users.filter((u) => u.status === "active").length,
          suspended: users.filter((u) => u.status === "suspended").length,
          banned: users.filter((u) => u.status === "banned").length,
        });
        
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h3>users: {stats.total}</h3>
      <h3>users active: {stats.active}</h3>
      <h3>users suspended: {stats.suspended}</h3>
      <h3>users banned: {stats.banned}</h3>
    </>
  );
}
