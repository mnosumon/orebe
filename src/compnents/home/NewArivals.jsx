import React, { useRef } from 'react'
import Container from '../utilities/Container'
import HeadingH2 from '../utilities/HeadingH2'
import ProductCard from './ProductCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowLeftLong,  FaArrowRightLong} from "react-icons/fa6";


const NewArivals = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  let settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 4,
    speed: 500,
    slidesToScroll: 1,
    appendDots: false,
    arrows: false,
    responsive: [{
      breakpoint: 414,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      }
    },
    ]
  };


  return (
    <section>
        <Container>
          <HeadingH2 content="New Arrivals" />
          <div className="relative ">
          <div className="slider-container">
            <Slider className='flex justify-center'
              ref={slider => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <ProductCard />
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </Slider>
            <div style={{ textAlign: "center" }}>
              <button className="button absolute top-1/2 -translate-y-1/2 left-0 md:h-14 h-10 w-10 md:w-14 rounded-full bg-slate-400 flex justify-center items-center" onClick={previous}>
                <FaArrowLeftLong className='text-lg md:text-3xl text-white'/>
              </button>
              <button className="button absolute top-1/2 -translate-y-1/2 right-[1.6%] md:h-14 h-10 w-10 md:w-14 rounded-full bg-slate-400 flex justify-center items-center" onClick={next}>
                <FaArrowRightLong className='text-lg md:text-3xl text-white'/>
              </button>
            </div>
          </div>
          </div>
        </Container>
    </section>
  )
}

export default NewArivals