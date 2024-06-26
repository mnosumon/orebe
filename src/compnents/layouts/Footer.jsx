import React from 'react'
import Container from '../utilities/Container'
import H5 from '../utilities/H5'
import AncorForFooter from '../utilities/AncorForFooter'
import Image from '../utilities/Image'
import FooterLogo from '../../assets/images/footerLogo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <Container>
        <div className="mb-14">
          <div className="flex sm:gap-7 md:gap-20 lg:gap-36 xl:gap-64">
            <div className="flex flex-wrap sm:flex-nowrap sm:gap-x-12  gap-x-14 gap-y-4  md:gap-8 lg:gap-24 xl:gap-[140px]">
              <div className="">
                <H5 content="menu" className="uppercase" />
                <div className="flex flex-col gap-[6px] mt-4">
                  <AncorForFooter to="#" content="Home" />
                  <AncorForFooter to="#" content="Shop" />
                  <AncorForFooter to="#" content="About" />
                  <AncorForFooter to="#" content="Contact" />
                  <AncorForFooter to="#" content="Journal" />
                </div>
              </div>
              <div className="">
                <H5 content="SHOP" className="uppercase" />
                <div className="flex flex-col gap-[6px] mt-4 md:w-[62px] lg:min-w-[72px]">
                  <AncorForFooter to="#" content="Category 1" />
                  <AncorForFooter to="#" content="Category 2" />
                  <AncorForFooter to="#" content="Category 3" />
                  <AncorForFooter to="#" content="Category 4" />
                  <AncorForFooter to="#" content="Category 5" />
                </div>
              </div>
              <div className="">
                <H5 content="help" className="uppercase" />
                <div className="flex flex-col gap-[6px] mt-4 md:w-[114px] lg:min-w-32">
                  <AncorForFooter to="#" content="Privacy Policy" />
                  <AncorForFooter to="#" content="Terms & Conditions" />
                  <AncorForFooter to="#" content="Special E-shop" />
                  <AncorForFooter to="#" content="Shipping" />
                  <AncorForFooter to="#" content="Secure Payments" />
                </div>
              </div>
              <div className="">
                <article className='font-dm font-bold text-primary leading-[27px]'>
                  (052) 611-5711 <br/> company@domain.com
                </article>
                <span className='text-sm font-dm leading-praimary text-[#6D6D6D] font-norma mt-2 inline-block lg:w-auto'>575 Crescent Ave. Quakertown, PA 18951</span>
            </div>
            </div>
            <div className="w-[121px] h-[26px] overflow-hidden md:block hidden">
              <Image sourc={FooterLogo} alt="Footer Logo"/>
            </div>
          </div>
        <div className="mt-16 flex justify-between items-start">
          <div className="flex gap-4 md:gap-[26px] items-center">
            <FaFacebookF className='text-base' />
            <FaLinkedinIn className='text-base' />
            <FaInstagram className='text-base' />
          </div>
          <p className='text-sm font-dm md:leading-praimary text-[#6D6D6D] font-normal w-56 sm:w-auto'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
        </div>
        </div>
      </Container>
    </section>
  )
}

export default Footer