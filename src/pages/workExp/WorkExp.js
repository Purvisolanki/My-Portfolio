import React from "react";
import { SiReact } from "react-icons/si";
import { SiPersistent } from "react-icons/si";
import { SiCisco } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jul 2023 - Aug 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiPersistent />}
            >
              <h3 className="vertical-timeline-element-title">
                Martain intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
               Persistent Systems
              </h4>
              <p>
              Gained practical experience in DSA, DBMS, and programming languages during my internship, effectively applying
              this knowledge to excel in assessments.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jun 2023 - Jul 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiCisco />}
            >
              <h3 className="vertical-timeline-element-title">
              Cisco virtual intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Cisco Networking Academy
              </h4>
              <p>
              ● Key Skills Acquired: Network Planning and Installation, Problem-Solving, Network Troubleshooting, and Security
Awareness.<br></br> ● Implemented a network in Cisco Packet Tracer and created a comprehensive PowerPoint presentation explaining the
modules used in that network in depth.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Oct 2022 - Nov 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaUniversity />}
            >
              <h3 className="vertical-timeline-element-title">
              Research Intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Indian Institute of Technology(IIT), Indore
              </h4>
              <p>
              ● Researched software-defined IoT networks, analyzing their potential benefits and challenges, contributing to a 35%
growth in data analysis, report writing, and IoT-SDN intersection understanding. <br></br>● Independently explored software-defined IoT networks, leading to a 35% skill enhancement in data analysis, report
writing etc.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Dec 2022 - Jan 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
              Web development and Designing intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Oasis Infobyte
              </h4>
              <p>
              ●Undertook and successfully completed diverse web development projects.<br></br>
●Expanded skill sets to navigate various challenges.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
