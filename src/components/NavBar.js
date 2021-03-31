import React from 'react';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="home" smooth className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth className="nav-link" href="#">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Carousel" smooth className="nav-link" href="#">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="experience" smooth className="nav-link" href="#">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth className="nav-link" href="#">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
