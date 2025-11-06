import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex bg-[#f8f9fb] text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col gap-6 border-r border-gray-200">
        <h1 className="text-2xl font-bold text-purple-600">Muzz</h1>

        <nav className="flex flex-col gap-4 text-gray-700 text-[0.95rem]">
          <a className="font-semibold text-purple-600">Home</a>
          <a className="hover:text-purple-600 transition">Artists</a>
          <a className="hover:text-purple-600 transition">Albums</a>
          <a className="hover:text-purple-600 transition">Genres</a>
          <a className="hover:text-purple-600 transition">Playlists</a>
        </nav>

        <div className="mt-4 border-t pt-4 flex flex-col gap-3">
          <a className="hover:text-purple-600 transition">Favourites</a>
          <a className="hover:text-purple-600 transition">Downloads</a>
          <a className="hover:text-purple-600 transition">My Playlists</a>
        </div>
      </aside>

      {/* Main Section */}
      <main className="flex-grow p-6 overflow-y-auto">
        {/* Top Nav */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 px-4 py-2 rounded-lg w-80 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Login / Sign Up
            </button>
          </div>
        </div>

        {/* Top Music Carousel */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Top Music</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-56 h-72 bg-white rounded-xl shadow hover:shadow-lg transition relative overflow-hidden cursor-pointer"
              >
                <img
                  src={`https://placehold.co/300x400?text=Track+${i}`}
                  className="w-full h-full object-cover"
                  alt="music"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Newest Section */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Newest</h2>

          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={`https://placehold.co/60x60`}
                  className="rounded-lg"
                />
                <div className="ml-4 flex-grow">
                  <h4 className="font-semibold text-gray-800">Song {i}</h4>
                  <p className="text-sm text-gray-500">Artist Name</p>
                </div>
                <span className="text-sm text-gray-500">3:20</span>
              </div>
            ))}
          </div>
        </section>

        {/* Playlists */}
        <section className="mt-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-xl font-semibold">Playlists</h2>
            <button className="text-purple-600 hover:underline">View All</button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Chill", "Party", "Rainy Day", "Driving"].map((p, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow bg-white cursor-pointer hover:shadow-lg transition"
              >
                <img
                  src={`https://placehold.co/300x200?text=${p}`}
                  className="w-full h-36 object-cover"
                />
                <p className="p-3 font-medium">{p}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
