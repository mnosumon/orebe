import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import BannerImg from '../../assets/svg/banner.svg'
import Image from '../utilities/Image';
import { Link } from 'react-router-dom';

const Banner = () => {
  let [dotActive, setDotActive] = useState(null)
  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "0",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
         i === dotActive ? 
         {
          width: "30px",
          color: "primary",
          borderRight: "5px red solid",
          padding: "10px 0",
          cursor: "pointer"
         }
         :
         {
          width: "30px",
          color: "primary",
          borderRight: "5px #FFFFFF solid",
          padding: "10px 0",
          cursor: "pointer"
         }
        }
      >
        0{i + 1}
      </div>
    )
  };
  return (
    <Slider {...settings}>
    <div>
      <Link>
         <Image sourc={BannerImg}/>
      </Link>
    </div>
    <div>
      <Link>
         <Image sourc={BannerImg}/>
      </Link>
    </div>
    <div>
      <Link>
         <Image sourc={BannerImg}/>
      </Link>
    </div>
  </Slider>
  )
}

export default Banner