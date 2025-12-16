import { useState } from "react";

const AllUsersList = ({ users, setUsers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const eliminar = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/users/${selectedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...selectedUser, ...form }),
    });

    setUsers((prev) =>
      prev.map((u) => (u.id === selectedUser.id ? { ...u, ...form } : u))
    );

    setForm({ name: "", username: "", email: "", phone: "" });
    closeModal();
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="liUsers li-sryle">
          {user.name} - id: {user.id}
          <div>
            <button onClick={() => eliminar(user.id)}>eliminar</button>
            <button
              onClick={() => {
                setSelectedUser(user);
                setForm({
                  name: user.name,
                  username: user.username,
                  email: user.email,
                  phone: user.phone,
                });
                openModal();
              }}
            >
              editar
            </button>
          </div>
        </li>
      ))}
      {isOpen && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-header">Editar Usuario </h2>
            <form className="modal-body" onSubmit={handleSubmit}>
              <label htmlFor="name">Name </label>
              <input
                type="text"
                name="name"
                placeholder={form.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="username">username </label>
              <input
                type="text"
                name="username"
                placeholder={form.username}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">email </label>
              <input
                type="text"
                name="email"
                placeholder={form.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone">phone </label>
              <input
                type="text"
                name="phone"
                placeholder={form.phone}
                onChange={handleChange}
                required
              />
              <div className="modal-footer">
                <input type="submit" value="enviar" />
                <button onClick={closeModal}>Cerrar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </ul>
  );
};

export default AllUsersList;
