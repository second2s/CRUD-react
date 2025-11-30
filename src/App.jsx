import "./App.css";
import AllData from "./components/UsersData";
import BetsData from "./components/BetsData";
import BestPlayers from './components/BestPlayer'
import NewUser from "./components/NewUser";

function App() {
  return (
    <>
      <h1>Cash Control</h1>
      <AllData />
      <BetsData />
      <BestPlayers/>
      <NewUser />
    </>
  );
}
export default App;
