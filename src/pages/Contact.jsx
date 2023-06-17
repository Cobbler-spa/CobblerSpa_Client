import React from 'react'
import "../styles/Home.css";

import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <section id="contactSection" style={{paddingTop:"5rem"}}>
        <p className="contactHeading">Contact Us</p>
        <div className="underline"></div>
        <div className="contactUsContainer container">
          <div className="mapInfoContainer">
            {/* info */}

            <div className="InfoContainer">
              <p style={{textDecoration:"underline solid grey"}}>
                <GoLocation style={{marginRight:"8px",fontSize:"x-large", color:"green"}}/>
                Store location
              </p>
              <p>Address :- Khar West, Mumbai</p>
              <p style={{textDecoration:"underline solid grey"}}>
                <BiSupport style={{marginRight:"8px", fontWeight:"bold", fontSize:"x-large"}}/>Customer Care
              </p>
              <ul>
                <li>
                  <BsWhatsapp style={{marginRight:"8px", fontWeight:"bold", fontSize:"x-large",color:"green"}}/> :- 91 8169747321
                </li>
                <li>
                  <BsFillTelephoneFill style={{marginRight:"8px", fontSize:"x-large",fontWeight:"bold"}}/> :- 91 8169747321
                </li>
                <li>
                  <AiOutlineMail style={{marginRight:"8px",fontSize:"x-large", fontWeight:"bold"}}/> :-{" "}
                  <a href="mailto:info@cobblerspa.com " >info@cobblerspa.com </a>
                </li>
              </ul>

              <p>Open:- Monday - Saturday</p>
              <p>TIme:- 11am - 7pm</p>
            </div>
            {/* Map */}

            <div className="mapContainer">
              {" "}
              <iframe
                title="Google Maps"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                id="gmap_canvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15083.541266150647!2d72.82146984176136!3d19.068779264145718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c904d1f59003%3A0x3fed21d7128f1fd4!2sKhar%2C%20Khar%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1685781883623!5m2!1sen!2sin"
                width="500"
                height="300"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div style={{width:"100%"}} className="locationContainer">
            {/* locations */}
            <ul className="citiesList">
              <li >Delhi</li>
              <li>Bangalore</li>
              <li>Hyderabad</li>
              <li>Chennai</li>
              <li>Kolkata</li>
              <li>Jaipur</li>
              <li>Ahmedabad</li>
              <li>Vadodara</li>
              <li>Surat</li>
              <li>Lucknow</li>
              <li>Chandigarh</li>
            </ul>
            <p style={{ fontWeight: "600", textAlign:"center" , color:"black"}}>
              We serve all major cities in India
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact