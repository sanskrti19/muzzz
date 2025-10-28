 
  
import Landing from '../pages/landing'
import "./home.css";  

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <Landing />

      {/* About / Intro Section */}
      <section className="about-section py-5 text-center">
        <div className="container">
          <h2 className="section-title">About Our Music Platform</h2>
          <p className="section-text mt-3">
            Discover music like never before. Our platform connects artists,
            listeners, and creators in one harmonious space. Whether you want
            to explore new genres or share your passion with others, we’ve got
            you covered.
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="events-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Upcoming Events</h2>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="event-card">
                <img
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
                  alt="Live Concert"
                />
                <h4>Live Concert Nights</h4>
                <p>Experience the best live music events happening near you.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="event-card">
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
                  alt="DJ Party"
                />
                <h4>DJ Party Weekend</h4>
                <p>Join the hottest DJs spinning your favorite tracks.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="event-card">
                <img
                  src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
                  alt="Acoustic Session"
                />
                <h4>Acoustic Sessions</h4>
                <p>Chill vibes with acoustic performances from top artists.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 text-center">
        <div className="container">
          <h2>Start Your Music Journey Today</h2>
          <p>Join thousands of users discovering new music every day.</p>
          <button className="primary-btn">Get Started</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4 text-center">
        <p>© {new Date().getFullYear()} MyMusic. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

