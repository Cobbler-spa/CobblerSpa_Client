import React from 'react'
import Carousel from '../components/CarouselComponent'
import ServicePage from '../components/ServicePage'

const Services = () => {
  return (
    <>
    <div style={{backgroundColor:"black", paddingTop:"4.8rem", overflow:"hidden"}}>
    <Carousel/>
    </div>
    <ServicePage/>
    </>
  )
}

export default Services