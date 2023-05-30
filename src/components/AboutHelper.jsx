import React from "react";

const AboutHelper = ({ TeamData }) => {

  return (
    <section id="ChefBlock">
      <h4 className="Chefs-title">Our Team</h4>
      <div className="Chefs_container reveal">
        {TeamData.map((item) => {
          const { id, imgurl, h1, p1 } = item;
          return (
            <article key={id} className="ChefContainer">
                <div className="ChefImg">
              <img src={imgurl} alt="chefimg" className="chefimg" />
              </div>
              <div className="ChefInfo">
                <h3>{h1}</h3>
                <p>{p1}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default AboutHelper;