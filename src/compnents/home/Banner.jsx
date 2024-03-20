import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImg from '../../assets/svg/banner.svg'
import Image from '../utilities/Image';
import { Link } from 'react-router-dom';

const Banner = () => {
  var settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          width: 'auto'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
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