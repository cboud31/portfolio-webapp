import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>New Orleans, LA</p>
            </div>
            <div className="d-flex">
              <a href="tel:504-460-3438">(504) 460-3438</a>
            </div>
            <div className="d-flex">
              <p>cboud31@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link className="footer-nav" to="home" smooth>
                  Home
                </Link>

                <br />
                <Link className="footer-nav" to="about" smooth>
                  About Me
                </Link>
                <br />
                <Link className="footer-nav" to="portfolio" smooth>
                  Portfolio
                </Link>
                <br />
                <Link className="footer-nav" to="experience" smooth>
                  Experience
                </Link>
                <br />
                <Link className="footer-nav" to="contact" smooth>
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <LinkedinShareButton
                url={'https://www.linkedin.com/in/cboud31/</div>'}
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
