// Rooms.jsx
import React, { useEffect, useState } from "react";

const ROOMS_KEY = "MUZZ_ROOMS";

export default function Rooms() {
  const profile = JSON.parse(localStorage.getItem("MUZZ_PROFILE") || "{}");
  const [rooms, setRooms] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [friend, setFriend] = useState("");

  useEffect(() => {
    const r = JSON.parse(localStorage.getItem(ROOMS_KEY) || "[]");
    setRooms(r);
  }, []);

  const saveRooms = (next) => {
    setRooms(next);
    localStorage.setItem(ROOMS_KEY, JSON.stringify(next));
  };

  const createRoom = () => {
    if (!roomName) return;
    const newRoom = {
      id: crypto.randomUUID(),
      name: roomName,
      owner: profile.displayName || "You",
      members: [{ name: profile.displayName || "You", status: "owner" }],
      requests: [],
    };
    const next = [newRoom, ...rooms];
    saveRooms(next);
    setRoomName("");
  };

  const addFriend = (roomId) => {
    if (!friend) return;
    const next = rooms.map((r) =>
      r.id === roomId
        ? {
            ...r,
            requests: [...r.requests, { name: friend, status: "pending" }],
          }
        : r
    );
    saveRooms(next);
    setFriend("");
  };

  const approve = (roomId, name) => {
    const next = rooms.map((r) =>
      r.id === roomId
        ? {
            ...r,
            requests: r.requests.filter((x) => x.name !== name),
            members: [...r.members, { name, status: "member" }],
          }
        : r
    );
    saveRooms(next);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] p-6">
      <div className="max-w-4xl mx-auto">
        {/* profile header */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6 flex items-center gap-4">
          <img
            src={profile.profilePic || "https://placehold.co/100x100?text=User"}
            className="w-14 h-14 rounded-full border-2 border-purple-500 object-cover"
          />
          <div className="flex-grow">
            <p className="font-semibold">{profile.displayName || "Your Name"}</p>
            <p className="text-sm text-gray-500">
              {profile.instagram && <>Instagram: <span className="font-medium">{profile.instagram}</span> • </>}
              {profile.snapchat && <>Snap: <span className="font-medium">{profile.snapchat}</span></>}
            </p>
          </div>
        </div>

        {/* create room */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Create a Room</h3>
          <div className="flex gap-2">
            <input
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Room name (e.g., Chill Beats)"
              className="flex-grow bg-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <button onClick={createRoom} className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
              Create
            </button>
          </div>
        </div>

        {/* list rooms */}
        <div className="grid gap-4">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-semibold">{room.name}</h4>
                  <p className="text-sm text-gray-500">Owner: {room.owner}</p>
                </div>
                <div className="flex gap-2">
                  <input
                    value={friend}
                    onChange={(e) => setFriend(e.target.value)}
                    placeholder="Add friend by name"
                    className="bg-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                  <button
                    onClick={() => addFriend(room.id)}
                    className="px-3 py-2 rounded-lg border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  >
                    Invite
                  </button>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-sm font-semibold mb-1">Members</p>
                <div className="flex flex-wrap gap-2">
                  {room.members.map((m, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gray-100 text-sm"
                    >
                      {m.name} {m.status === "owner" && "👑"}
                    </span>
                  ))}
                </div>
              </div>

              {room.requests.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-semibold mb-1">Requests</p>
                  <div className="flex flex-wrap gap-2">
                    {room.requests.map((rq, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200">
                        <span className="text-sm">{rq.name}</span>
                        <button
                          onClick={() => approve(room.id, rq.name)}
                          className="text-xs px-2 py-1 rounded bg-green-600 text-white"
                        >
                          Approve
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {rooms.length === 0 && (
            <p className="text-center text-gray-500">No rooms yet. Create one!</p>
          )}
        </div>
      </div>
    </div>
  );
}
