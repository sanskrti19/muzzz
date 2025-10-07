import { useParams } from "react-router-dom";

export default function Room() {
  const { id } = useParams();

  return (
    <div className="container mt-5">
      <h2 className="text-danger mb-4">Room ID: {id}</h2>

      <div className="card p-4 shadow-sm mb-4">
        <h5>Shared Music Player</h5>
        <p>Play/pause music together and see the current playlist.</p>
        <button className="btn btn-primary me-2">Play</button>
        <button className="btn btn-danger">Pause</button>
      </div>

      <div className="card p-4 shadow-sm">
        <h5>Playlist / Queue</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Song 1</li>
          <li className="list-group-item">Song 2</li>
          <li className="list-group-item">Song 3</li>
        </ul>
      </div>
    </div>
  );
}
