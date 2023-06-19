import React from 'react';
import SupportSlide from '../../data/SupportSlide.json';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Supported() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1500,
        cssEase: "linear"
    };
  return (
    <section className='mb-8'>
        <div className="container mx-auto">
            <div className=' p-11 text-center bg-white rounded-lg shadow-lg shadow-slate-200'>
                <h1 className='mb-5'>We love being supported by</h1>
                <p className=' mb-16'>It is of fortune that we are able to get assist from some of the top brands of the world.</p>
                <div className=' px-36 mb-7'>
                    <Slider {...settings}>
                        {SupportSlide.map((slide, index) => (
                            <div>
                                <img key={index} className='mx-auto' src={slide.img} alt="slideSlide" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Supported