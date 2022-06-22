import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Aboutmore = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <>
      <div
        style={{
          marginTop: "20px",
        }}
      ></div>
      <div className="aboutmore-conatiner">
        <div className="headingDiv">
          <h1>About Us</h1>
        </div>

        <div className="about-1">
          Weltech Computers is a young company with highly motivated mission to
          become leading company by offering quality products and services to a
          range of individual to corporate level clients. We are committed to
          provide systems and services to our clients at economical prices
          without compromising the quality.
        </div>
        <div className="about-2">
          The Proprietor has a very broad awareness of system uses in Mechanical
          Engineering in Central Government Organization{" "}
          <p
            style={{
              fontWeight: "bold",
              color: "#4a4a4a",
            }}
          >
            SAIL - 30 years experience
          </p>{" "}
          as well as in day to day life.
        </div>
        <div className="teamImage" data-aos="zoom-in">
          <img src="./images/team-1.svg" alt="img of Team" />
        </div>

        <div className="teamInclude">
          <h3>The Team included in Board of Directors</h3>
          <div className="teamList">
            <ul>
              <li>
                Is Graduated in Electronics and Communication and is having more
                than 6 years experience in troubleshooting the Electronics and
                Computer systems. Also having a very well knowledge of Bangalore
                IT Market and System peripherals.
              </li>
              <li>
                Is Diploma Graduated from Bangalore University in Electronics
                and Computer Science and is having more than 5 years of
                experience in troubleshooting the systems.
              </li>
              <li>
                Has received MCA degree from Visheswarayya Technical University
                and is having experience of more than 7 years in IT Sector.
              </li>
              <li>
                Has received MCA degree from Bangalore University and is having
                more than 15 years of professional experience in IT Sector.
              </li>
            </ul>
          </div>
          <div className="about-3">
            We have team of efficient, energetic young, dynamic and talent
            members to provide service to our customers. Our specially trained
            technicians repair and recondition the systems and devices in our
            well equipped work-station.
          </div>
          <div className="about-3">
            All products and services offered by us are excellent, timely,
            economical and eco-friendly to exceed customer satisfaction. We have
            more than 100 satisfied clients throughout Bangalore.
          </div>
          <div className="our-address">
            3/A, Ground Floor, AECS Layout, Near Bank Of Baroda, Marathahalli
            Post, Bangalore-560037, 080 4228 6502, +919686454757.
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutmore;
