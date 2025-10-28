import React from "react";
import "./landing.css";  

const Landing = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        {/* <img src="https://i.pinimg.com/736x/52/67/d4/5267d4279700b5716652fbf756062e4e.jpg"
        className="logo"></img> */}
        {/* <h3 className="logo">Muzzz</h3> */}
        
      </nav>

      <section className="hero-section">
        <div className="text-content">
          <h1>Music for everyone.</h1>
          <div className="cta-buttons">
            <button className="primary-btn">Try it free</button>
            <a href="#" className="secondary-link">
              Learn more
            </a>
          </div>
        </div>

        <div className="image-grid">
          <img src="https://stories.freepiklabs.com/api/vectors/music/rafiki/render?color=&background=complete&hide="
           alt="Artist 1" className="img-left" />
          <div className="featured-card">
            <img src="https://stories.freepiklabs.com/api/vectors/recording/amico/render?color=&background=complete" 
            alt="Artist 2" className="img-main" />
            <div className="card-overlay">
              <h3>Today's Country</h3>
              <p>Apple Music Country</p>
              <small>
                Discover all the ways you can showcase content on Music.
              </small>
               
            </div>
          </div>
          <img src="https://stories.freepiklabs.com/api/vectors/recording/rafiki/render?color=&background=complete&hide=" 
          alt="Artist 3" className="img-right" />
        </div>
      </section>

      <footer className="scroll-nav">
       
        
      </footer>
    </div>
  );
};

export default Landing;
