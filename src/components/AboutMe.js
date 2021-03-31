import React from 'react';
import profilePhoto from '/Users/CoryB/Desktop/2021_codingProjects/portfolioWebsite/my-app/src/FB_Picture.jpeg';

const text = `You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.`;

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row" id="about-me">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-aboutme">
            <img className="profile-photo" src={profilePhoto} alt="aboutme" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
