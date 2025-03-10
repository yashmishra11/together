import { Link } from "react-router-dom";
import "../styles/style.css"; // Ensure styles are applied

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-tagline">
        <img src="/logo.png" alt="Website Logo" className="navbar-logo" />
        <span className="tagline">Connecting People Across Faiths & Interests</span>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/events" className="nav-button">Events</Link>
        <Link to="/communities" className="nav-button">Communities</Link>
        <Link to="/login" className="nav-button">Sign in</Link>
      </div>
    </div>
  );
}

export default Navbar;
