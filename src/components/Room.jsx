import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Room() {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const tracks = [
    { title: "Song 1 (Playing)", artist: "Artist Name", duration: "3:45" },
    { title: "Song 2", artist: "Another Artist", duration: "2:50" },
    { title: "Morning Breeze", artist: "Lo-Fi Beats", duration: "3:10" },
    { title: "Ocean Eyes", artist: "Billie Wave", duration: "4:00" },
  ];

  const filteredTracks = tracks.filter(
    (track) =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <div className="h-screen w-screen flex flex-col bg-[#f8f9fb] overflow-hidden">
      
      <div className="flex-grow w-full grid grid-cols-[1fr_280px] gap-[10px] p-[10px] overflow-y-auto">
        
        <div className="bg-white rounded-[14px] p-[10px_15px] flex justify-between items-center text-[#555] h-[40px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] col-span-2">
          <input
            type="text"
            placeholder="Search tracks..."
            className="bg-[#f3f3f3] border border-[#e5e5e5] text-[#1a1a1a] px-[15px] py-[8px] rounded-[10px] w-[300px] focus:outline-none focus:border-[#7c4dff] transition"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img
            src="https://i.pinimg.com/1200x/80/c9/eb/80c9eb80b0a6cf7dc683342fdeec7653.jpg "
            alt="Profile"
           className="w-[55px] h-[55px] rounded-full border-2 border-[#7c4dff] cursor-pointer"
          />
        </div>

        <div>
          <h2 className="text-[1.6rem] font-semibold text-[#7c4dff] mb-[10px]">Room: {id}</h2>

           
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[20px] mt-[15px]">
            <div className="bg-white rounded-[16px] p-[20px] text-[#1a1a1a] h-[240px] relative overflow-hidden cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all">
              <p className="text-[0.9rem] font-semibold text-[#555]">28 Tracks</p>
              <h4 className="text-[1.1rem] font-semibold mt-[4px]">Release Radar</h4>
              <img
                src="https://stories.freepiklabs.com/api/vectors/edit-photo/cuate/render?color=&background=complete"
                className="absolute bottom-0 right-0 w-[60%] h-[250px] opacity-[0.7] rounded-[10px]"
              />
            </div>

            <div className="bg-white rounded-[16px] p-[20px] text-[#1a1a1a] h-[240px] relative overflow-hidden cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all">
              <p className="text-[0.9rem] font-semibold text-[#555]">12 Tracks</p>
              <h4 className="text-[1.1rem] font-semibold mt-[4px]">Daily Mix</h4>
              <img
                src="https://stories.freepiklabs.com/api/vectors/profile-pic/bro/render?color=&background=complete&hide="
                className="absolute bottom-0 right-0 w-[60%] h-[250px] opacity-[0.7] rounded-[10px]"
              />
            </div>
          </div>

          {/* Genres & Tracks */}
          <div className="grid grid-cols-[1.5fr_2fr] gap-[20px] mt-[20px]">
            {/* Genres */}
            <div className="bg-white rounded-[12px] p-[15px] shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
              <h4 className="text-[1.1rem] font-semibold mb-[10px]">Genres</h4>
              <div className="flex flex-wrap gap-[8px]">
                {["Classic", "House", "Minimal", "Hip-Hop", "Chillout", "Country", "Techno"].map((g, i) => (
                  <button
                    key={i}
                    className={`px-[14px] py-[6px] rounded-[20px] text-[0.8rem] border border-[#e5e5e5] bg-[#f3f3f3] cursor-pointer transition ${i === 0 ? "bg-[#7c4dff] text-white" : "hover:border-[#7c4dff] hover:text-[#7c4dff]"}`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Tracks */}
            <div className="bg-white rounded-[12px] p-[15px] shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
              <h4 className="text-[1.1rem] font-semibold mb-[10px]">Playlist / Queue</h4>
              <ul>
                {filteredTracks.length > 0 ? (
                  filteredTracks.map((track, i) => (
                    <li
                      key={i}
                      className="flex items-center mb-[12px] p-[8px] rounded-[8px] hover:bg-[#f3f3f3] cursor-pointer transition"
                    >
                      <img
                        src="https://stories.freepiklabs.com/api/vectors/profile-pic/bro/render?color=&background=complete&hide="
                        className="w-[45px] h-[45px] rounded-[6px] object-cover"
                      />
                      <div className="flex-grow ml-[10px]">
                        <div className="text-[0.9rem] font-medium">{track.title}</div>
                        <div className="text-[0.75rem] text-[#555]">{track.artist}</div>
                      </div>
                      <span className="text-[0.8rem] text-[#555]">{track.duration}</span>
                    </li>
                  ))
                ) : (
                  <p className="text-[#777] text-[0.9rem]">No tracks found.</p>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Friends Panel */}
        <div className="bg-white rounded-[12px] p-[15px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] h-fit sticky top-[15px]">
          <h4 className="text-[1.1rem] font-semibold mb-[10px]">Friends Activity</h4>
          <div className="flex items-center mb-[12px] p-[6px] rounded-[8px] hover:bg-[#f3f3f3] cursor-pointer transition">
            <img
              src="https://stories.freepiklabs.com/api/vectors/profile-pic/rafiki/render?color=&background=complete&hide="
              className="w-[40px] h-[40px] rounded-full mr-[10px] object-cover"
            />
            <div>
              <strong className="block text-[0.9rem] text-[#1a1a1a]">Amber Holmes</strong>
              <small className="text-[#555] text-[0.75rem]">Dutch Kiss - Inner Mix</small>
            </div>
          </div>
          <button className="w-full border border-[#7c4dff] text-[#7c4dff] py-[8px] rounded-[20px] hover:bg-[#7c4dff] hover:text-white transition">
            View All
          </button>
        </div>
      </div>

      {/* Player Bar */}
      <div className="bg-white/80 backdrop-blur-md fixed bottom-0 left-0 w-full h-[80px] flex items-center justify-between px-[20px] border-t border-[#e5e5e5] shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
        <div className="flex items-center text-[#1a1a1a] text-[1.5rem]">
          <button className="mx-[10px] hover:text-[#7c4dff]">◀</button>
                    <button
            onClick={togglePlayPause}
            className="mx-[10px] hover:text-[#7c4dff]"
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>

          <button className="mx-[10px] hover:text-[#7c4dff]">▶</button>
        </div>

        <div className="flex items-center flex-grow mx-[20px] text-[#555] text-[0.75rem]">
          <span>1:20</span>

          <div className="h-[4px] bg-[#e5e5e5] flex-grow mx-[10px] rounded-[2px] relative">
            <div className="h-full w-[30%] bg-[#7c4dff] rounded-[2px]"></div>
          </div>

          <span>4:30</span>
        </div>
      </div>
    </div>
  );
}

          