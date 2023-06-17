import React from 'react'
import '../styles/Home.css'
const Partners = () => {
  return (

    <section id="partnersSection" >
        <p className='partnersHeading'>Our Partners</p>
        <div className='underline'></div>
    <div id='partnersBody'>
        
        <div className='partnerSlider'>
            <div className='partnerSlideS'>
                {/* slides */}
                <article className='partnerSlide'>
                    <img src='http://clipart-library.com/images_k/adidas-logo-transparent/adidas-logo-transparent-12.png' alt='adidas'/>
                </article>
                <article className='partnerSlide'>
                    <img src='https://www.creatvlogic.com/wp-content/uploads/2015/11/logo-nike-black.png' alt='Nike'/>
                </article>
                <article className='partnerSlide'>
                    <img src='https://i.pinimg.com/originals/e9/69/95/e96995312a7fbf4bd2e1f796e4618461.png' alt='Offwhite'/>
                </article>
                <article className='partnerSlide'>
                    <img src='https://pngimg.com/uploads/gucci/gucci_PNG28.png' alt='adidas'/>
                </article>
                <article className='partnerSlide'>
                    <img src='https://m.media-amazon.com/images/G/01/2018/skechers/Skechers-250._CB496141595_.png' alt='adidas'/>
                </article>
                <article className='partnerSlide'>
                    <img src='https://i.pinimg.com/originals/dc/59/01/dc5901faac8ae38d00a38b228ad373a0.png' alt='f'/>
                </article>


                {/* double */}
                <article className='partnerSlide'>
                    <img src='http://clipart-library.com/images_k/adidas-logo-transparent/adidas-logo-transparent-12.png' alt='adidas'/>
                </article>
                <article className='partnerSlide'>
                    <img src='https://www.creatvlogic.com/wp-content/uploads/2015/11/logo-nike-black.png' alt='Nike'/>
                </article>
                <article className='partnerSlide'>
                    <img src='https://i.pinimg.com/originals/e9/69/95/e96995312a7fbf4bd2e1f796e4618461.png' alt='Offwhite'/>
                </article>
                <article className='partnerSlide'>
                    <img src='https://pngimg.com/uploads/gucci/gucci_PNG28.png' alt='adidas'/>
                </article>
                <article className='partnerSlide'>
                    <img src='https://m.media-amazon.com/images/G/01/2018/skechers/Skechers-250._CB496141595_.png' alt='adidas'/>
                </article>
                <article className='partnerSlide'>
                    <img src='https://i.pinimg.com/originals/dc/59/01/dc5901faac8ae38d00a38b228ad373a0.png' alt='adidas'/>
                </article>
            </div>

        </div>
    </div>

    </section>
  )
}

export default Partners