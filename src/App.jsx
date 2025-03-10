import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Communities from "./pages/Communities";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";  // Import Navbar
import "./styles/style.css";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will always be visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
