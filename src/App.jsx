import "./App.css";
import AllData from "./components/usersData";
import BetsData from "./components/betsData";
import BestPlayers from './components/bestPlayer'

function App() {
  return (
    <>
      <h1>Cash Control</h1>
      <AllData />
      <BetsData />
      <BestPlayers/>
    </>
  );
}
export default App;
