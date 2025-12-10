import React, { useState } from "react";

const NewUser = ({ addUser }) => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      ...form,
      status: "active",
      createdAt: new Date().toISOString().slice(0, -5),
      lastBetAt: null,
      balance: 0,
      betsCount: 0,
      betsWon: 0,
      betsLost: 0,
    };

    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const userFromServer = await res.json();

      setForm({ name: "", username: "", email: "", phone: "" });

      addUser(userFromServer);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name="name"
          placeholder="ingrese su nombre"
          onChange={handleChange}
          value={form.name}
          required
        />
        <br />

        <label htmlFor="username">username </label>
        <input
          type="text"
          name="username"
          placeholder="ingrese su usuario"
          onChange={handleChange}
          value={form.username}
          required
        />
        <br />

        <label htmlFor="email">email </label>
        <input
          type="text"
          name="email"
          placeholder="ingrese su email"
          onChange={handleChange}
          value={form.email}
          required
        />
        <br />

        <label htmlFor="phone">phone </label>
        <input
          type="text"
          name="phone"
          placeholder="ingrese su numero"
          onChange={handleChange}
          value={form.phone}
          required
        />
        <br />

        <input type="submit" value="enviar" />
      </form>
    </>
  );
};

export default NewUser;
