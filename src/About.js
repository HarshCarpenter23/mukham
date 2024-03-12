import React from "react";
import "./styles/about.css";
// import startup from "./assets/startup.png";
import aboutimg from "./assets/aboutimg.png";
import TeamCards from "./components/TeamCards";
import mission from "./assets/mission.png"

function About() {
  return (
    <div className="abt">
      {/* <div className="section about-bg">
        <h1 style={{ textAlign: "center" }}>MUKHAM...</h1>
      </div> */}
      <div className="aboutContent">
          <h3>About Us</h3>
          <p>Mukham Inc, is a fully student driven Start-up accelerating from VIT-AP emerged with a goal to solve the problem of tedious manual attendance marking system.</p>
      </div>

      <div className="section fdc">
        <div className="about_page_content">
          {/* <div className="about_page_left">
            <p>
              We all are accustomed to social distancing because of the great
              pandemic which left us with new challenges. As Schools, Colleges,
              Universities and Companies are reopening and the crowd is getting
              gathered back again. It might be really tough to follow the rules
              and take precautions. With every new challenge comes a new
              proposition.
            </p>
          </div> */}
          <div className="about_page_img">
            <img src={aboutimg} alt="startup llustration" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="about_page_content fdcm700">
          {/* <div className="about_page_right">
            <img src={startup} alt="startup llustration" />
          </div>
          <div className="about_page_left">
            <p>
              We Company Mukham Inc, a fully student driven Start-up
              accelerating from VIT-AP emerged with a new Mobile Application
              which can be installed for facial attendance with 100% Social
              Distancing. It uses Geotagging to know the location of the
              particular user and if the user is not within the range the app
              won’t allow him to mark attendance.
            </p>
          </div>
        </div> */}
        <div className="mission">
         <img src={mission} alt="Mission" />
          <div className="about_page_left">
          <h3>Our Mission</h3>
            <p>
              The main objective of Mukham is to have a solution other than the traditional fingerprint recognition for TnA (Time and Attendance) such as facial attendance application that utilizes 100% social distancing which, at a times like pandemics, is extremely useful so as not to spread the virus.</p>
                        </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="section fdc">
        <h2>Our Team</h2>
        <br />  
        <br />  

        <TeamCards />
      </div>
      <br />
      <br />
      <br />
    </div>
    </div>
  );
}

export default About;
