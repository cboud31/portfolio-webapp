import React from 'react';
import graceShopper from '/Users/CoryB/Desktop/2021_codingProjects/portfolioWebsite/my-app/src/graceShopper.png';

import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

const Portfolio = () => {
  return (
    <div id="Carousel" className="carousel slide" data-ride="carousel">
      <h1 className="portfolio-heading">Portfolio</h1>
      <ol className="carousel-indicators">
        <li data-target="#Carousel" data-slide-to="0" className="active"></li>
        <li data-target="#Carousel" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        {/* Re-Factor below over mapped Project Component */}
        <div className="carousel-item active">
          <div className="container" id="item-container">
            <div className="item-body">
              <img src={graceShopper} alt="project" id="photo" />
              <span>
                <h2>Grace Shopper</h2>
                <ul>
                  <li>Description of project</li>
                  <li>Technology Stack:</li>
                </ul>
              </span>
            </div>
            <span>
              <GitHubIcon fontSize="large" />
              <OpenInBrowserIcon fontSize="large" />
            </span>
          </div>
        </div>
        {/* Item 2 */}
        <div className="carousel-item">
          <div className="container" id="item-container">
            <h1>Fitness Tracker</h1>
            <div className="item-body">
              <p>Lorem ipsum...</p>
              <p>Even more lorem ipsum...</p>
            </div>
            <span>
              <GitHubIcon fontSize="large" />
              <OpenInBrowserIcon fontSize="large" />
            </span>
          </div>
        </div>
      </div>
      <a
        href="#Carousel"
        className="carousel-control-prev"
        role="button"
        data-slide="prev"
      >
        <span className="sr-only">Previous</span>
        <span class="carousel-control-prev-icon" aria-hidden />
      </a>
      <a
        href="#Carousel"
        className="carousel-control-next"
        role="button"
        data-slide="next"
      >
        <span className="sr-only">next</span>
        <span class="carousel-control-next-icon" aria-hidden />
      </a>
    </div>
  );
};

export default Portfolio;
