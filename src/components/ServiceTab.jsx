import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import data from '../Utility/Services.js'

const ServiceTab = ({tab}) => {
  const [serviceData, setServiceData] = useState({ title: "", desc: "" });

  useEffect(() => {
    const filteredData = data.find((item) => item.tab === tab);
    console.log(filteredData)
    if (filteredData) {
      setServiceData(filteredData);
    }
  }, [tab]);
  
  return (
    <div className='container' style={{width:"80%"}}>
      <MDBCard>
      <MDBCardHeader style={{textTransform:"uppercase", fontSize:"1.2rem", fontFamily:"oswald, poppins, sans-serif", letterSpacing:"1.5px"}}>{serviceData.title}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardText style={{fontSize:"1rem", fontFamily:"poppins, sans-serif"}}>{serviceData.desc}</MDBCardText>
        <MDBBtn href='#' style={{backgroundColor:"black"}}>Book Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default ServiceTab
