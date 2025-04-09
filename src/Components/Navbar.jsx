import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light fs-2 mx-5" to="/">NewsX</Link>
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
            <ul className="navbar-nav fs-5 text-center">
              <li className="nav-item mx-2 rounded">
                <Link className="nav-link active text-light" to="/general">All</Link>
              </li>
              <li className="nav-item mx-2 rounded">
                <Link className="nav-link active text-light" to="/health">Health</Link>
              </li>
              <li className="nav-item mx-2 rounded">
                <Link className="nav-link active text-light" to="/science">Science</Link>
              </li>
              <li className="nav-item mx-2 rounded">
                <Link className="nav-link active text-light" to="/sports">Sports</Link>
              </li>
              <li className="nav-item mx-2 rounded">
                <Link className="nav-link active text-light" to="/business">Business</Link>
              </li>
              <li className="nav-item mx-2 rounded">
                <Link className="nav-link active text-light" to="/technology">Technology</Link>
              </li>
              <li className="nav-item mx-2 rounded">
                <Link className="nav-link active text-light" to="/entertainment">Entertainment</Link>
              </li>
            </ul>

            <div className="dropdown mx-3">
              <button
                className="btn btn-secondary dropdown-toggle fs-5 fw-semibold"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Me
              </button>
              <ul className="dropdown-menu text-center">
                <li>
                  <a href="https://www.linkedin.com/in/dhanush-abb811259/" target="_blank" rel="noopener noreferrer">
                    <img style={{ width: '55px', height: '55px' }} src={assets.linkedIn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
                    <img style={{ width: '45px', height: '45px' }} src={assets.Gmail} alt="Gmail" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Dhanush12212" target="_blank" rel="noopener noreferrer">
                    <img style={{ width: '40px', height: '40px' }} src={assets.GitHub} alt="GitHub" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
