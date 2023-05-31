import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBRow, MDBCol,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-white text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' contrast  style={{color:"black"}}/>
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn outline color='light'>
                Subscribe
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <MDBContainer >
        <Link to='/' style={{margin:"8px", textDecoration:"none", color:"whitesmoke"}}>Home</Link>
        <Link to='/about' style={{margin:"8px", textDecoration:"none", color:"whitesmoke"}}>About Us</Link>
        <Link to='/testimonials' style={{margin:"8px", textDecoration:"none", color:"whitesmoke"}}>Testimonials</Link>
        <Link to='/services' style={{margin:"8px", textDecoration:"none", color:"whitesmoke"}}>Services</Link>
        <Link to='/policy' style={{margin:"8px", textDecoration:"none", color:"whitesmoke"}}>Our Work</Link>
        <Link to='/pricing' style={{margin:"8px", textDecoration:"none", color:"whitesmoke"}}>About Us</Link>
        <Link to='/pricing' style={{margin:"8px", textDecoration:"none", color:"whitesmoke"}}>Price Guide</Link>
        <div style={{width:"8rem", height:"0.20rem", color:"whitesmoke", backgroundColor:"white", margin:" 12px auto"}}></div>
      </MDBContainer>
    <MDBContainer className='p-4 pb-0'>
      <section className='mb-4'>
        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2023 Copyright:
      <a className='text-white' href='https://mdbootstrap.com/'>
        CobblerSpa.com
      </a>
    </div>
  </MDBFooter>
  )
}

export default Footer



