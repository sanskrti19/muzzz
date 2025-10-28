import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-4"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container">
        {/* Brand Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://i.pinimg.com/1200x/52/67/d4/5267d4279700b5716652fbf756062e4e.jpg"
            alt="Logo"
            style={{ height: "50px", width: "auto", borderRadius: "5px" }}
          />
          <span className="ms-2 text-danger fw-bold">Muzz</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/events">Events</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/room">Room</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
