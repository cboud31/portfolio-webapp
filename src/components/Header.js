import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
  const roles = [
    'Web Developer',
    'Software Engineer',
    'Musician',
    'Kettlebell Athlete',
  ];
  return (
    <div className="header-wrapper" id="home">
      <div className="main-info">
        <h1>Cory Boudreaux</h1>
        <Typed
          className="typed-text"
          strings={roles}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link to="contact" smooth className="button-main" offset={-110}>
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
