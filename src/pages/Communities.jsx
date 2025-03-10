import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/style.css"; // Import global styles

function Communities() {
  const [communities] = useState([
    { name: "Interfaith Dialogue", description: "A group for open discussions on faith.", members: 120 },
    { name: "Charity Volunteers", description: "Helping those in need through volunteer work.", members: 85 },
    { name: "Youth Leadership", description: "Empowering young individuals to lead.", members: 95 },
  ]);

  return (
    <div className="container">
      <h2>Communities</h2>
      <p>Explore and join communities that match your interests.</p>

      <div className="communities-list">
        {communities.map((community, index) => (
          <div key={index} className="community-card">
            <h3>{community.name}</h3>
            <p>{community.description}</p>
            <p><strong>Members:</strong> {community.members}</p>
            <button>Join</button>
          </div>
        ))}
      </div>

      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Communities;
