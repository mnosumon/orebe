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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: false,
    arrows: false,
  };
  return (
    <section>
        <Container>
          <HeadingH2 content="New Arrivals" />
          <div className="relative ">
          <div className="slider-container">
            <Slider
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
              <button className="button absolute top-1/2 -translate-y-1/2 left-0 h-14 w-14 rounded-full bg-slate-400 flex justify-center items-center" onClick={previous}>
                <FaArrowLeftLong className='text-3xl text-white'/>
              </button>
              <button className="button absolute top-1/2 -translate-y-1/2 right-[1.6%] h-14 w-14 rounded-full bg-slate-400 flex justify-center items-center" onClick={next}>
                <FaArrowRightLong className='text-3xl text-white'/>
              </button>
            </div>
          </div>
          </div>
        </Container>
    </section>
  )
}

export default NewArivals