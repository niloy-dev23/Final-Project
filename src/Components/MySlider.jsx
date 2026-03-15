import React from 'react'
import Slider from 'react-slick';

const MySlider = ({ className, children }) => {
      const settings = {
        dots:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:false,
        prevArrow:false,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,

        
    };
  return (
    <div className={`slider-container w-250 ${className}`}>
        <Slider {...settings}>
            {children}
        </Slider>
    </div>
  )
}

export default MySlider