import React, { useState } from "react";
import personal from "../image/osas-side.jpeg";
import Joblist from "../image/joblist.png";
import Url from "../image/url shortener.png";
import Weight from "../image/weight.png";
import tracker from "../image/Ip tracker.png";
import comment from "../image/Interactive comment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faCode,
  faMobileAlt,
  faDesktopAlt,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCss3Alt,
  faJs,
  faReact,
  faHtml5,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { services } from "../data/services";
import { experiences } from "../data/experience";
import Tools from "./Tools";
import Projects from "./Projects";
function Body() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((T) => (T = !T));
  };
  const toggleStyle = () => {
    return {
      right: toggle && "0",
    };
  };
  return (
    <div>
      <div className="entire-container">
        <header>
          <div className="nav-bar">
            <div>
              <h1>Osaretin</h1>
            </div>
            <div className="nav-links">
              <nav>
                <ul style={toggleStyle()}>
                  {/* eslint-disable */}
                  <li>
                    <a
                      onClick={() => {
                        handleClick();
                        window.location.href = "/#";
                      }}
                    >
                      Home
                    </a>
                  </li>
                  {/* eslint-disable */}
                  <li>
                    <a
                      onClick={() => {
                        handleClick();
                        window.location.href = "/#about";
                      }}
                    >
                      About
                    </a>
                  </li>
                  {/* eslint-disable */}
                  <li>
                    <a
                      onClick={() => {
                        handleClick();
                        window.location.href = "/#services";
                      }}
                    >
                      Services
                    </a>
                  </li>
                  {/* eslint-disable */}
                  <li>
                    <a
                      onClick={() => {
                        handleClick();
                        window.location.href = "/#contacts";
                      }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
              <label
                className="menu-bar"
                onClick={() => {
                  handleClick();
                }}
              >
                {toggle ? (
                  <FontAwesomeIcon icon={faTimes} size="2x" />
                ) : (
                  <FontAwesomeIcon icon={faBars} size="2x" />
                )}
              </label>
            </div>
          </div>
          <div className="text-area">
            <h2>
              a seasoned executive virtual assistant with over two years of
              experience.
            </h2>
            <span className="desktop-text">
              {" "}
              <button>Download Resume</button>
            </span>
          </div>
        </header>
        <section id="about">
          <div className="introduction-div">
            <div className="introduction">
              <h1>Hi there, I'm Osaretin Favour Omorogieva</h1>
              <p>
                A seasoned executive virtual assistant with over two years of
                experience. Proficient in administrative and strategic support,
                empowering executives and busy professionals to maximize their
                time and achieve peak productivity.
              </p>
            </div>
          </div>
          {/* experience */}
          <div className="experiences">
            {experiences.map((experience) => (
              <div className="experience">
                <h4>{experience.period}</h4>
                <strong>
                  <h3>{experience.company}</h3>
                </strong>
                <p className="job-role">{experience.role}</p>
                <p>{experience.desc}</p>
                <small>{experience.location}</small>
              </div>
            ))}
          </div>
        </section>
        <section id="services">
          <div className="services">
            <div className="services-writing">
              <h3>My Services</h3>
              {/* <p>Let me serve you</p> */}
            </div>
            <div className="boxes">
              {services.map((service, ind) => (
                <div className="box" key={ind}>
                  <img src={service.icon} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="skills">
            <div className="personal-img">
              <img src={personal} alt="personal" />
            </div>
            <div className="skills-and-tools">
              <div>
                <h1>Why work with me</h1>
                <p>
                  I am a great communicator and love to invest necessary time to
                  understand instructions very well
                </p>
              </div>
              <div>
                <h3>Tools I work with</h3>
                <p>
                  I am experienced with daily use of tools like Trello, Apollo,
                  and Microsoft Suite, among others, to manage projects and
                  streamline workflows.
                </p>
              </div>
              <Tools />
            </div>
          </div>
        </section>
        <section>
          <Projects />
        </section>
        <section id="contacts">
          <div className="contact">
            <h1>Contact Details</h1>
            <p>
              You can always reach me via email
              <span>
                <a href="mailto:osaretinomorogieva97@gmail.com">
                  {" "}
                  osaretinomorogieva97@gmail.com{" "}
                </a>
              </span>
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://calendly.com/osaretinomorogieva97/1-1-discovery-call"
                );
              }}
            >
              Book a 1:1 Discovery Call{" "}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Body;
