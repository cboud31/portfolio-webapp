import React from 'react';
import graceShopper from '/Users/CoryB/Desktop/2021_codingProjects/portfolioWebsite/my-app/src/graceShopper.png';

const Portfolio = () => {
  return (
    <div className="container" id="portfolio-container">
      <h1 className="portfolio-heading">Portfolio</h1>

      <div
        id="carousel-wrapper"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-wrapper"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-wrapper" data-slide-to="1"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <h1>Mango Record Store</h1>
            <div className="container">
              <img id="graceShopper" src={graceShopper} alt="grace-shopper" />
              <p>Lorem ipsum gypsum </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <h1>Example Headline 2</h1>
              <p>Lorem ipsum gypsum </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
