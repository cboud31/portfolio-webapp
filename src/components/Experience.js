import React from 'react';

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2012 - 2014</h3>
            <p>
              The path of the righteous man is beset on all sides by the
              iniquities of the selfish and the tyranny of evil men. Blessed is
              he who, in the name of charity and good will, shepherds the weak
              through the valley of darkness, for he is truly his brother's
              keeper and the finder of lost children. And I will strike down
              upon thee with great vengeance and furious anger those who would
              attempt to poison and destroy My brothers. And you will know My
              name is the Lord when I lay My vengeance upon thee.
            </p>
          </div>
        </div>
        {/* -- */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014 - 2017</h3>
            <p>Lorem ipsum...</p>
          </div>
        </div>
        {/* -- */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017 - 2020</h3>
            <p>Lorem ipsum...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
