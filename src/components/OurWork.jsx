import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
const OurWork = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "black",
          textAlign: "center",
          width: "100vw",
          padding: "2rem 0",
        }}
      >
        <p
          className="ourWorkHeading"
          style={{
            color: "white",
            fontFamily: "oswald",
            letterSpacing: "4px",
            fontSize: "2rem",
            textTransform: "uppercase",
          }}
        >
          Our Work
        </p>
        <div className="underline"></div>
        <div
          className="container pb-5"
          style={{
            display: "flex",
            gap: "0.3rem",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            flexWrap: "wrap",
          }}
        >
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
            style={{ width: "30%" }}
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
            style={{ width: "30%" }}
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
            style={{ width: "30%" }}
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
            style={{ width: "30%" }}
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
            style={{ width: "30%" }}
          />
          <img
            src="https://mdbootstrap.com/img/new/standard/city/044.webp"
            alt="..."
            style={{ width: "30%" }}
          />
        </div>
        <Link
          to="/results"
          style={{
            textDecoration: "none",
            color: "black",
            backgroundColor: "whitesmoke",
            padding: "4px 16px",
            borderRadius:"30px"
          }}
        >
          View Before and After Gallery
        </Link>
      </section>
    </>
  );
};

export default OurWork;
