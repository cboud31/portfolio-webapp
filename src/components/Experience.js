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
            <h3>Fluids Specialist</h3>
            <h4>Schlumberger Land Rigs || August 2017 - April 2020</h4>
            <p>
              Engineered and maintained various drilling fluid systems during 5
              commercial field test wells for the company's prototype,
              technology-intesnive drilling oil rig in West Texas.{' '}
            </p>
            <p>
              Supervised a team of 10 employees among 4 crew rotations in
              addition to all drilling-fluid related logistics, equipment
              maintenance and operational planning.
            </p>
            <p>
              Collaborated with technical service engineers and developers by
              providing field-testing feedback for new fluid systems as well as
              real-time testing software and equipment.
            </p>
          </div>
        </div>
        {/* -- */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Drilling Fluids Specialist</h3>
            <h4>
              M-I SWACO, A Schlumberger Company || January 2015 - August 2017
            </h4>
            <p>
              Conducted daily testing and monitoring of drilling-fluid
              properties for offshore deepwater oil wells in the Gulf of Mexico.
            </p>
            <p>
              Collaborated with senior DFS's and on-site customer
              representatives to ensure optimal and cost-effective drilling
              conditions.
            </p>
            <p>
              Tracked material useage and inventories for major customer
              accounts.
            </p>
          </div>
        </div>
        {/* -- */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Environmental Compliance Specialist</h3>
            <h4>M-I SWACO, A Schlumberger Company</h4>
            <h4>January 2012 - January 2015</h4>
            <p>
              Maintained expansive regulatory paperwork and testing for
              permitted discharges of drilling-fluid byproducts for 6 offshore
              drilling installations in deepwater Gulf of Mexico.
            </p>
            <p>
              Collaborated with customers' in-house compliance teams to develop
              compliant cost-savings measures averaging $18,000 per well.
            </p>
            <p>
              Participated in 3 government audits resulting in zero incidents of
              non-compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
