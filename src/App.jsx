import "./App.css";
import AllData from "./components/UsersData";
import BetsData from "./components/BetsData";
import BestPlayers from "./components/BestPlayer";
import NewUser from "./components/NewUser";
import AllUsersList from "./components/AllUsersList";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const addUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div id="appStructure">
      <div className="cards">
        <h1>Users & Bets</h1>
        <div>
          <AllData users={users} />
          <BetsData />
        </div>
      </div>
      <div className="cards">
        <h2>TOP 5 Players</h2>
        <BestPlayers />
      </div>
      <div className="cards">
        <h2>Add User</h2>
        <NewUser addUser={addUser} />
      </div>
      <div className="cards">
        <h2>Users List</h2>
        <AllUsersList users={users} setUsers={setUsers} />
      </div>
    </div>
  );
}
export default App;
