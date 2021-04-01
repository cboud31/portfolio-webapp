import React from 'react';
import profilePhoto from '/Users/CoryB/Desktop/2021_codingProjects/portfolioWebsite/my-app/src/FB_Picture.jpeg';

const text = [
  {
    msg: `I'm a software developer with a passion for testing personal limits and re-defining capabilities.`,
  },
  {
    msg: `My previous professional experience in journalism as well as the oil & gas industry has provided me with nearly a decade of experience in navigating high-pressure, team-driven challenges that require constant collaboration and attention to detail.`,
  },
  {
    msg: `In the wake of the COVID-19 pandemic I was laid off from my job in the oilfield; the ensuing lockdown provided an opportunity to transform my side hobby of web development into a professional pursuit. I enrolled in Fullstack Academy's online immersive bootcamp, a 26-week program focused on JavaScript, HTML & CSS fundamentals as well as popular web technologies like React, PostgreSQL and Node.js.`,
  },
  {
    msg: `I'm eager to join a company where I can push my creative boundaries and work in a collaborative environment centered around the goal of identifying and improving inefficiencies in everyday life.`,
  },
];

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
          <span className="bio">
            {text.map((p) => (
              <p>{p.msg}</p>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
