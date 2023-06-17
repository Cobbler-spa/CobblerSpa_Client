import React, { useState,useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ReactCardFlip from "react-card-flip";
import front from '../Assets/Hero.jpg'
import back from '../Assets/Hero2.jpg'
import bg from '../Assets/HeroText.jpeg'
import { MDBBtn } from 'mdb-react-ui-kit';
const OurWork = () => {
    const [flips, setFlips] = useState([]);
    useEffect(()=>{
      const sr = ScrollReveal({
        origin: "bottom",
        duration: 2000,
        distance: "80px",
        reset: false,
      });
  
      sr.reveal(`.workBlock`, { opacity: 0, interval: 300 });
    },[])
  const handleFlip = (index) => {
    const newFlips = [...flips];
    newFlips[index] = !newFlips[index];
    setFlips(newFlips);
  };
  const renderCards = () => {
    const cardData = [
      { id: 1, frontImg: front, backImg: back },
      { id: 2, frontImg: front, backImg: back },
      { id: 3, frontImg: front, backImg: back },
      // Add more card data as needed
    ];

    return cardData.map((card, index) => (
      <ReactCardFlip key={card.id} isFlipped={flips[index]} flipDirection="vertical" >
        <div
          className="cardFront "
          style={{
            width: "25rem",
            height: "25rem",
            background: `url(${card.frontImg})`,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "column",
            borderRadius:"30px",
            boxShadow:"2px 4px 10px 0.8px white",
            padding:"1rem"
          }}
          onClick={() => handleFlip(index)}
        >
          <MDBBtn outline rounded color='light'  onClick={() => handleFlip(index)}>Before 
      </MDBBtn>
        </div>
        <div
          className="cardBack"
          style={{
            width: "25rem",
            height: "25rem",
            background: `url(${card.backImg})`,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "column",
            borderRadius:"30px",
            boxShadow:"2px 4px 10px 0.8px white",
            padding:"1rem"
          }}
          onClick={() => handleFlip(index)}
        >
          
          <MDBBtn outline rounded color='light'  onClick={() => handleFlip(index)}>After 
      </MDBBtn>
        </div>
      </ReactCardFlip>
    ));
  };
  return (
    <section id="workPage"  style={{ width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4rem",
    flexWrap: "wrap",
    gap: "2rem",background: `url(${bg})`, backgroundAttachment:"fixed", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
         
         {renderCards()}
    </section>
  );
};

export default OurWork;
