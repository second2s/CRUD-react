import React, { useEffect, useState } from "react";

export default function AllData({ users }) {
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    suspended: 0,
    banned: 0,
  });

  useEffect(() => {
    setStats({
      total: users.length,
      active: users.filter((u) => u.status === "active").length,
      suspended: users.filter((u) => u.status === "suspended").length,
      banned: users.filter((u) => u.status === "banned").length,
    });
  }, [users]);

  return (
    <>
      <h3 className="li-sryle">users: {stats.total}</h3>
      <h3 className="li-sryle">users active: {stats.active}</h3>
      <h3 className="li-sryle">users suspended: {stats.suspended}</h3>
      <h3 className="li-sryle">users banned: {stats.banned}</h3>
    </>
  );
}
