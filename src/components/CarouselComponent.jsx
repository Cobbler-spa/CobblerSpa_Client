import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <div >
<Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
      <div>
        <img src="https://mdbootstrap.com/img/new/slides/042.jpg" alt="Slide 1" />
        <div className="legend">
          <h5>Launder</h5>
        </div>
      </div>
      <div>
        <img src="https://mdbootstrap.com/img/new/slides/043.jpg" alt="Slide 2" />
        <div className="legend">
          <h5>Revive </h5>
        </div>
      </div>
      <div>
        <img src="https://mdbootstrap.com/img/new/slides/041.jpg" alt="Slide 3" />
        <div className="legend">
          <h5>Repair </h5>
        </div>
      </div>
      <div>
        <img src="https://mdbootstrap.com/img/new/slides/041.jpg" alt="Slide 3" />
        <div className="legend">
          <h5>Restore </h5>
        </div>
      </div>
      <div>
        <img src="https://mdbootstrap.com/img/new/slides/041.jpg" alt="Slide 3" />
        <div className="legend">
          <h5>Customise </h5>
        </div>
      </div>
      <div>
        <img src="https://mdbootstrap.com/img/new/slides/041.jpg" alt="Slide 3" />
        <div className="legend">
          <h5>And Many Nore...</h5>
        </div>
      </div>
    </Carousel>
    </div>
    
  );
};

export default CarouselComponent;
