import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutSection">
        <div
          className="ourWorkHeading">
          <p
            style={{
              color: "whitesmoke",
              fontFamily: "oswald",
              letterSpacing: "4px",
              fontSize: "2rem",
              textTransform: "uppercase",
              width: "80%",
              margin:"auto"
            }}
          >
            About Us
          </p>
          <div className="underline"></div>
          <p style={{color:"white",letterSpacing:"1px", fontFamily:"poppins", fontSize:"1rem"}}>
            Cobbler Spa is more than just a shoe laundry service - we are the
            epitome of luxury and style. At Cobbler Spa, we are Third
            generational Cobblers passionate about providing a premium shoe and
            bag care experience with an unwavering commitment to quality
            craftsmanship, we are ‘Shoe Whisperer’ we breathe new life into your
            beloved accessories. From designer Bags to heels to leather loafers,
            each pair receives immaculate treatment it deserves. Our team of
            skilled artisans and experts with meticulous attention to detail
            ensure every imperfection is immaculately addressed. Witness the
            transformation as your accessories regain their original glory.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
