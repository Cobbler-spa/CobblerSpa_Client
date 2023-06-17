import React, { useEffect } from "react";
import "../styles/About.css";
import About from "../components/AboutHelper";
import Parallax from "../components/Parallax";
import AboutData2 from "../Utility/AboutData2";
import TeamData from "../Utility/TeamData";
import AboutDecor from "../components/AboutDecor";
import AboutData from "../Utility/AboutData";
const AboutApp = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Parallax AboutData={AboutData[0]} />
      <section className="section section-light">
        <h2 style={{fontFamily:"oswald, poppins", fontSize:"4rem", letterSpacing:"4px", textTransform:"uppercase" }}>About Cobbler Spa</h2>
        <div className="underline" style={{width:"15rem"}}></div>
                <br /><br />
        
        <p style={{textAlign:"left", fontSize:"1.5rem", fontFamily:"poppins"}}>
           <span style={{fontSize:"4rem", fontWeight:"bold" }}>W</span>elcome to Cobbler Spa where we redefine the concept of shoe care by
          providing unparalleled luxury and premium services to our esteemed
          clients. With a meticulous attention to detail and a passion for
          preserving the beauty of your favourite footwear, we invite you to
          indulge in an extraordinary shoe care experience like no other. 
                    <br/><br/>
          
          At Cobbler Spa, we understand that your shoes are more than just
          accessories; they are an extension of your personal style and a
          reflection of your individuality. That is why we have curated a range
          of exclusive shoe care services to ensure that your beloved footwear
          receives the utmost care and attention it deserves.
                    <br/><br/>
          
          Our team of highly skilled Cobblers and leather artisans, known as the "Shoe Whisperers,"
          possess a profound knowledge of footwear craftsmanship and an
          unwavering commitment to perfection. Combining age-old techniques with
          modern innovation, they work tirelessly to revive and restore the
          original allure of your shoes, all while providing a touch of luxury
          that exceeds your expectations. 
                    <br/><br/>
          
          From handcrafted cleaning and conditioning treatments to meticulous stain removal, our extensive
          range of premium services caters to every shoe care need. We
          specialise in delicate materials, rare leathers, and exotic skins,
          handling each pair of shoes with the utmost care and precision.
          Whether it's revitalising vintage treasures, rejuvenating designer
          masterpieces, or simply maintaining the impeccable condition of your
          everyday favourites, Cobbler Spa is your trusted partner in preserving
          your shoe investment. 
                    <br/><br/>
          
          We pride ourselves on our unwavering commitment
          to quality and our use of the finest, environmentally-friendly
          products. Our exclusive line of shoe care solutions, carefully
          selected for their superior performance and sustainability, ensures
          that your shoes not only look immaculate but also stay healthier and
          more durable in the long run. 
                    <br/><br/>
          
          At Cobbler Spa, we believe that the true
          essence of luxury lies in exceptional service. From the moment you
          step into our elegantly designed space, you will be greeted by a team
          of warm and knowledgeable professionals who are dedicated to providing
          you with a personalised experience tailored to your unique needs. We
          strive to create an atmosphere of relaxation and indulgence, allowing
          you to unwind as we work our magic on your cherished shoes. 
                    <br/><br/>
          
          Join us on
          this extraordinary journey where your shoes will be immersed in a
          world of meticulous craftsmanship, sumptuous care, and unmatched
          luxury. Discover the transformative power of Cobbler Spa and entrust
          us with your most treasured footwear. Because your shoes deserve
          nothing less than the finest care, and we are here to elevate them to
          new heights of splendour. 
                    <br/><br/>
          
          Indulge in the Cobbler Spa experience today,
          and let us elevate your shoe care to a level beyond imagination.erves.
        </p>
        <div className="underline"></div>
      </section>
      
    
        
    </>
  );
};

export default AboutApp;
