import React, { useState } from "react";
import Slider from "react-slick";
import "../styles/Home.css"
import img from '../Assets/avatar.png'
import { FaQuoteLeft } from "react-icons/fa";
import data from '../Utility/TestiData.js'
import { MDBCard } from "mdb-react-ui-kit";
const SimpleSlider = () => {
  const [sliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
      cssEase: "linear"
  });

  return (
    <section id="testimonialSection">
    <p className="TestimonialHeading">What people Like ABout Us?</p>
    <div className="underline"></div>
    <div className="Testicontainer">
      <Slider {...sliderSettings}>
        {data.map((item) => (
          <MDBCard
            className="testiCardContainer"
            key={item.id}
          >
            <article className="testiCard">
              <div className="testiInfo">
                <FaQuoteLeft className="quoteIcon" />
                <p>{item.text}</p>
                <p className="testiAuthor">~{item.author}</p>
              </div>
              <img
                src={img}
                alt="..."
                className="testimonialImage"
              />
            </article>
          </MDBCard>
        ))}
      </Slider>
    </div>
  </section>
  );
};

export default SimpleSlider;