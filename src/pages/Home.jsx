import { Link } from "react-router-dom";

function Home() {
  return (<div>
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          Our platform is designed to **unite people** from diverse backgrounds,
          fostering meaningful interactions through faith and shared interests.
        </p>

        <div className="features">
          <div className="feature">
            <h3>🌍 Build Community</h3>
            <p>Connect with like-minded individuals and grow together.</p>
          </div>

          <div className="feature">
            <h3>📅 Discover Events</h3>
            <p>Find and join events that align with your values and interests.</p>
          </div>

          <div className="feature">
            <h3>🛡️ Safe & Inclusive</h3>
            <p>A welcoming space for open discussions and community building.</p>
          </div>

          <div className="feature">
            <h3>🎙️ Connect with Leaders</h3>
            <p>Learn from spiritual, social, and community leaders.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
