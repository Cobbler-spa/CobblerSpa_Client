import React from 'react';

import { FaWhatsappSquare } from "react-icons/fa";
import { useSelector } from 'react-redux';
const BookNowButton = () => {
  const {user} = useSelector((state)=>({...state.auth}))
  // const {name, email, address, phoneNumber} = user
  const handleContactWhatsApp = () => {
    let whatsappURL;
    if(user){

      const message = `Username: ${user?.name}\nEmail: ${user?.email}\nAddress: ${user?.address}\nPhone: ${user?.phoneNumber}`;
      const encodedMessage = encodeURIComponent(message);
       whatsappURL = `https://wa.me/+918591171188?text=${encodedMessage}`;
    }
    else{
       whatsappURL = `https://wa.me/+918591171188?text=Hello!`;
    }
    window.location.href = whatsappURL;
  };
  return (
    <button onClick={handleContactWhatsApp} className="book-now-button"><FaWhatsappSquare className='waBtn'/>Book Now</button>
  );
};

export default BookNowButton;
