import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import BannerImg from '../../assets/svg/banner.svg'
import Image from '../utilities/Image';
import { Link } from 'react-router-dom';

const Banner = () => {
  let [dotActive, setDotActive] = useState(0)
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
          left: "4%",
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
          color: "#262626",
          borderRight: "4px #262626 solid",
          padding: "10px 0",
          cursor: "pointer"
         }
         :
         {
          width: "30px",
          color: "transparent",
          borderRight: "4px #FFFFFF solid",
          padding: "10px 0",
          cursor: "pointer"
         }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          appendDots: dots => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "3%",
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
                width: "25px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                cursor: "pointer",
                fontSize: "14px",
                padding: "5px 0",
               }
               :
               {
                width: "25px",
                color: "transparent",
                borderRight: "3px #FFFFFF solid",
                cursor: "pointer",
                fontSize: "14px",
                padding: "5px 0",
               }
              }
            >
              0{i + 1}
            </div>
          ),
        }
      },
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: dots => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "2%",
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
                width: "20px",
                color: "#262626",
                borderRight: "2px #262626 solid",
                cursor: "pointer",
                fontSize: "12px",
               }
               :
               {
                width: "20px",
                color: "transparent",
                borderRight: "2px #FFFFFF solid",
                cursor: "pointer",
                fontSize: "12px",
               }
              }
            >
              0{i + 1}
            </div>
          ),
        }
      },
      {
        breakpoint: 320,
        settings: {
          dots: false,
        }
      },
    ],
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