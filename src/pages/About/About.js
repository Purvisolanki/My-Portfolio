import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://ih1.redbubble.net/image.1280931032.1989/st,small,507x507-pad,600x600,f8f8f8.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Motivated and disciplined FullStack developer fresher seeking entry-level opportunities to contribute innovative solutions and
elevate company success. Eager to leverage strong work ethics and self-motivation to enhance the IT team's performance.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
