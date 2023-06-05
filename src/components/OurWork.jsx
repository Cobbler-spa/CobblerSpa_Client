import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
const OurWork = () => {
  return (
    <>
      <section id="ourWorkSection">
        <p className="ourWorkHeading">Our Work</p>
        <div className="underline"></div>
        <div className="workContainer container pb-5 ">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
          />
        </div>
        <Link to="/work" className="WorkButton">
          View Before and After Gallery
        </Link>
      </section>
    </>
  );
};

export default OurWork;
