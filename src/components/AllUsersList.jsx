const AllUsersList = ({ users, setUsers }) => {
  const eliminar = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - id {user.id} - status: {user.status}
          <button
            className="bg-slate-950 pl-2 pr-2 rounded-md m-1"
            onClick={() => eliminar(user.id)}
          >
            eliminar
          </button>
          <button className="bg-slate-950 pl-2 pr-2 rounded-md m-1">
            editar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AllUsersList;
