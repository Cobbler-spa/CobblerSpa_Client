import React from 'react'
import ServicePage from '../components/ServicesSection'
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