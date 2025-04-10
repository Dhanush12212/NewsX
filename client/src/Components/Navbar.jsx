import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: "All", path: "/general" },
    { label: "Health", path: "/health" },
    { label: "Science", path: "/science" },
    { label: "Sports", path: "/sports" },
    { label: "Business", path: "/business" },
    { label: "Technology", path: "/technology" },
    { label: "Entertainment", path: "/entertainment" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top shadow-lg">
      <div className="container-fluid px-4">
        <Link className="navbar-brand text-light fs-2 fw-bold" to="/">
          <span className="text-warning">News</span>X
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav ms-auto me-4">
            {navItems.map(({ label, path }) => (
              <li className="nav-item mx-2" key={path}>
                <Link
                  className={`nav-link px-3 py-2 rounded text-light ${location.pathname === path ? 'bg-primary fw-bold' : ''}`}
                  to={path}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="dropdown">
            <button
              className="btn btn-outline-light dropdown-toggle fw-semibold"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              About Me
            </button>
            <ul className="dropdown-menu dropdown-menu-end p-3">
  <li className="text-center">
    <a href="https://www.linkedin.com/in/dhanush-abb811259/" target="_blank" rel="noopener noreferrer">
      <img className="dropdown-icon m-2" src={assets.linkedIn} alt="LinkedIn" />
    </a>
  </li>
  <li className="text-center">
    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
      <img className="dropdown-icon m-2" src={assets.Gmail} alt="Gmail" />
    </a>
  </li>
  <li className="text-center">
    <a href="https://github.com/Dhanush12212" target="_blank" rel="noopener noreferrer">
      <img className="dropdown-icon m-2" src={assets.GitHub} alt="GitHub" />
    </a>
  </li>
</ul>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
