import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4 " style={{backgroundColor:'#000'}}>
      <div className="container">
        <NavLink className="navbar-brand text-danger fw-bold" to="/"></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/events">Events</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/music">Music</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
             <li className="nav-item"><NavLink className="nav-link" to="/room">Room</NavLink></li>
          </ul>
          <button className="btn btn-outline-light ms-3">Get in Touch</button>
        </div>
      </div>
    </nav>
  );
}
