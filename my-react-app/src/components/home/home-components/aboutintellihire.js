import React from "react";
import Feature from "../utils/feature";
import "./aboutintellihire.css";

const AboutIntellihire = () => (
  <div className="intelli-hire__whatgpt3 section__margin" id="abt">
    <div className="intelli-hire__whatgpt3-feature">
      <Feature
        title="What is VirtuHire AI"
        text="VirtuHire AI is a groundbreaking platform that transforms the hiring landscape with advanced AI technologies. Employing state-of-the-art algorithms, it thoroughly examines applicants' CVs, intricately evaluates their projects, expertise, professional background, cultural fit, and aptitude. This innovative system redefines the recruitment process by leveraging cutting-edge technology for comprehensive candidate analysis."
      />{" "}
    </div>{" "}
    <div className="intelli-hire__whatgpt3-heading">
      <h1 className="gradient__text">
        {" "}
        Unleash the Capabilities of VirtuHire AI - Maximize the Potential of
        VirtuHire AI
      </h1>{" "}
      <p> Discover the Possibilities </p>{" "}
    </div>{" "}
    <div className="intelli-hire__whatgpt3-container">
      <Feature
        title="Streamline the Recruitment Process"
        text="Bid farewell to manual screening, saving valuable time. VirtuHire AI accelerates the process by 10 times, employing AI to assess candidate resumes and deliver instantaneous results."
      />
      <Feature
        title="Tailor-Made Assessment"
        text="Customize the evaluation criteria according to your requirements. VirtuHire AI's user-friendly dashboard empowers recruiters to adjust parameters and weighting factors, granting complete command over the hiring journey."
      />
      <Feature
        title="Instantaneous Analytics"
        text="Stay abreast of developments through real-time data. VirtuHire AI furnishes recruiters with a dashboard for monitoring the count of job applicants and the number progressing to subsequent interview stages, ensuring you stay well-informed."
      />
    </div>{" "}
  </div>
);

export default AboutIntellihire;
