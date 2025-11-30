import React, { useState } from "react";

const NewUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/users");
      const users = await res.json();

      const newId =
        users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;

      const user = {
        id: newId,
        name,
        username,
        email,
        phone,
        status: "active",
        createdAt: new Date().toISOString().slice(0, -5),
        lastBetAt: null,
        balance: 0,
        betsCount: 0,
        betsWon: 0,
        betsLost: 0,
      };

      fetch("http://localhost:3000/users", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      setName("");
      setUsername("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          placeholder="ingrese su nombre"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <br />

        <label htmlFor="username">username </label>
        <input
          type="text"
          id="username"
          placeholder="ingrese su usuario"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        <br />

        <label htmlFor="email">email </label>
        <input
          type="text"
          id="email"
          placeholder="ingrese su email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <br />

        <label htmlFor="phone">phone </label>
        <input
          type="text"
          id="phone"
          placeholder="ingrese su numero"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />
        <br />

        <input type="submit" value="enviar" />
      </form>
    </>
  );
};

export default NewUser;
