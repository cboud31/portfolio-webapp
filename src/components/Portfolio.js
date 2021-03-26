import React from 'react';

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
            <div class="container">
              <img
                src={'my-app/src/Screen Shot 2021-03-25 at 1.30.37 PM.png'}
                alt="grace-shopper"
              />
              <h1>Example Headline</h1>
              <p>Lorem ipsum gypsum </p>
            </div>
          </div>
          <div className="carousel-item">
            <div class="container">
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
