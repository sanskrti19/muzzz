import { useParams } from "react-router-dom";
import { useState } from "react";
import "./Room.css";

export default function Room() {
  const { id } = useParams();

  // --- State ---
  const [searchQuery, setSearchQuery] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  // --- Track Data ---
  const tracks = [
    { title: "Song 1 (Playing)", artist: "Artist Name", duration: "3:45" },
    { title: "Song 2", artist: "Another Artist", duration: "2:50" },
    { title: "Morning Breeze", artist: "Lo-Fi Beats", duration: "3:10" },
    { title: "Ocean Eyes", artist: "Billie Wave", duration: "4:00" },
  ];

  // --- Filtered Tracks based on search ---
  const filteredTracks = tracks.filter(
    (track) =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // --- Toggle Play/Pause ---
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="room-page-container">
      <div className="main-app-container">
        {/* 1. Top Navbar */}
        <div className="top-navbar">
          <input
            type="text"
            placeholder="Search tracks..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div>
            <img
              src="https://stories.freepiklabs.com/api/vectors/edit-photo/cuate/render?color=&background=complete"
              alt="Profile"
              className="user-profile"
            />
          </div>
        </div>

        {/* 2. Main Content */}
        <div className="player-content-area">
          <h2 className="room-header">Room: {id}</h2>

          {/* Music Cards */}
          <div className="music-card-grid">
            <div className="music-card card-purple">
              <p className="card-title">28 Tracks</p>
              <h4 className="card-subtitle">Release Radar</h4>
              <img
                src="https://stories.freepiklabs.com/api/vectors/edit-photo/cuate/render?color=&background=complete"
                alt="User"
                className="card-image-overlay"
              />
            </div>
            <div className="music-card card-cyan">
              <p className="card-title">12 Tracks</p>
              <h4 className="card-subtitle">Daily Mix</h4>
              <img
                src="https://stories.freepiklabs.com/api/vectors/profile-pic/bro/render?color=&background=complete&hide="
                alt="User"
                className="card-image-overlay"
              />
            </div>
          </div>

          {/* Genres + Tracks */}
          <div className="genres-and-tracks">
            <div className="genre-panel">
              <h4 className="panel-title">Genres</h4>
              <div className="genre-button-grid">
                <button className="genre-btn active">Classic</button>
                <button className="genre-btn">House</button>
                <button className="genre-btn">Minimal</button>
                <button className="genre-btn">Hip-Hop</button>
                <button className="genre-btn">Chillout</button>
                <button className="genre-btn">Country</button>
                <button className="genre-btn">Techno</button>
              </div>
            </div>

            <div className="tracks-panel">
              <h4 className="panel-title">Playlist / Queue</h4>
              <ul className="list-group">
                {filteredTracks.length > 0 ? (
                  filteredTracks.map((track, index) => (
                    <li className="track-list-item" key={index}>
                      <img
                        src="https://stories.freepiklabs.com/api/vectors/profile-pic/bro/render?color=&background=complete&hide="
                        alt="Art"
                        className="track-album-art"
                      />
                      <div className="track-info">
                        <div className="track-details">{track.title}</div>
                        <div className="track-artist">{track.artist}</div>
                      </div>
                      <span className="track-duration">{track.duration}</span>
                    </li>
                  ))
                ) : (
                  <p style={{ fontSize: "0.9rem", color: "#777" }}>
                    No tracks found.
                  </p>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Friends Panel */}
        <div className="friends-panel">
          <h4 className="panel-title">Friends Activity</h4>
          <div className="friend-item">
            <img
              src="https://stories.freepiklabs.com/api/vectors/profile-pic/rafiki/render?color=&background=complete&hide="
              alt="Friend"
              className="friend-avatar"
            />
            <div className="friend-details">
              <strong>Amber Holmes</strong>
              <small>Dutch Kiss - Inner Mix</small>
            </div>
          </div>
          <button className="view-all-btn">View All</button>
        </div>
      </div>

      {/* 4. Player Bar */}
      <div className="shared-player-bar">
        <div className="player-controls">
          <button>&#9664;</button>
          <button onClick={togglePlayPause}>
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button>&#9658;</button>
        </div>
        <div className="player-progress-bar">
          <span>1:20</span>
          <div className="progress-line">
            <div className="progress-filled"></div>
          </div>
          <span>4:30</span>
        </div>
      </div>
    </div>
  );
}
