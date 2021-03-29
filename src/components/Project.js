import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import graceShopper from '/Users/CoryB/Desktop/2021_codingProjects/portfolioWebsite/my-app/src/graceShopper.png';

// Later: Re-factor into a mappable component.

const Project = () => {
  return (
    <div className="carousel-item">
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
  );
};

export default Project;
