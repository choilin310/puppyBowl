import { Routes, Route, Link } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
// import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/newPlayerForm">New Player Form</Link>
      </nav>
      <Routes>
        <Route path="/newPlayerForm" element={<NewPlayerForm  />} />
        <Route path="/" element={<AllPlayers />} />
        {/* <Route path="/:id" element={<SinglePlayer />} /> */}
      </Routes>
    </div>
  );
}

export default App
