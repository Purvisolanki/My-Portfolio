import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        In the following project development, clear goal-setting and requirement gathering pave the way for structured sprints and version-controlled coding using Git. Emphasis on best practices and responsive UI design results in a streamlined deployment process. 
        Continuous improvement is driven by ongoing monitoring, maintenance, and feedback loops in an iterative development cycle.

        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="data:image/png;base64,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"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Reactjs</span>
                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      CryptoPulse
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/Purvisolanki/CryptoPulse"
                  >
                    Github
                  </a>
                  <a
                    className="ad-btn"
                    href="https://crypto-pulse-ochre.vercel.app/"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://akshayprotfolio.netlify.app/images/portfolio/project-6.png"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Reactjs</span>

                  <span className="card-detail-badge">HTML5</span>
                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">MI Store Clone</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://mi-store-clone-one.vercel.app/"
                  >
                    Live
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/Purvisolanki/MI-store-clone"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://media.licdn.com/dms/image/D4D05AQFNVeN5s08bMg/videocover-low/0/1695746762945?e=2147483647&v=beta&t=NoybxEB6ZK5Sew9rfyJED7m4LfTlUuZJN95lmIliUq4"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Reactjs</span>
                  <span className="card-detail-badge">HTML5</span>

                  <span className="card-detail-badge">CSS3</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Cart-master</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://ecomzy-jwt-assignment.vercel.app/"
                  >
                    Live
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/Purvisolanki/CartMaster"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
