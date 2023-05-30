import React from "react";

const AboutDecor = ({ id, imgurl, desc }) => {
  return (
    <>
      <article className="decorBox">
        <img
          src={imgurl}
          alt={id}
        />
        <p style={{ fontSize: "medium" }}>
         {desc}
        </p>
      </article>
    </>
  );
};

export default AboutDecor;