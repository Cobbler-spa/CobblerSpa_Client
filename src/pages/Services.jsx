import React from 'react'
import Carousel from '../components/CarouselComponent'
import ServicePage from '../components/ServicesSection'
import Car from '../components/ServiceCarousel'
import slides from '../Utility/Services.js'
const Services = () => {
  return (
    <>
    <div style={{backgroundColor:"white", paddingTop:"4.8rem"}}>
    <ServicePage slides={slides}/>
    </div>
    </>
  )
}

export default Services