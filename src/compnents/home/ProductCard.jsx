import React from 'react'
import Image from '../utilities/Image'
import SmartWatch from '../../assets/arrivals/smartWatch.svg'
import Regular16px from '../utilities/Regular16px'
import { FaHeart } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className="max-w-[300px] xl:max-w-[370px]">
      <Link to="#" className="max-h-[370px] relative group overflow-y-hidden bg-red-800 block">
          <div className='relative'>
              <Image sourc={SmartWatch} alt="Smart Watch" />
              <span className='absolute top-5 left-5 font-dm text-sm font-bold leading-normal bg-primary text-white py-1 px-2  md:px-3 lg:py-2 lg:px-6'>New</span>
          </div>
          <div className="p-7 bg-white flex flex-col items-end gap-5 w-full absolute -bottom-full group-hover:bottom-0 left-0 duration-500 ease-in-out">
            <div className="flex gap-4 items-center cursor-pointer">
              <Regular16px className="text-[8px] sm:text-sm md:text-base hover:font-bold  transition-all duration-300text-[#6D6D6D]" content="Free shipping"/>
              <FaHeart className='sm:text-sm md:text-lg text-[10px]'  />
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
              <Regular16px className="text-[8px] sm:text-sm md:text-base hover:font-bold transition-all duration-300 text-[#6D6D6D]" content="Compare"/>
              <TbReload className='sm:text-sm md:text-lg text-[10px]'  />
            </div>
            <div className="flex gap-4 items-center cursor-pointer">
              <Regular16px className="text-[8px] sm:text-sm md:text-base text-[#6D6D6D] hover:font-bold transition-all duration-300" content="Add to Cart"/>
              <FaShoppingCart className='sm:text-sm md:text-lg text-[10px]'  />
            </div>
          </div>
      </Link>
      <div className="">
        <div className="flex justify-between items-center mt-2 md:mt-4 lg:mt-6 mb-1 md:mb-3 lg:mb-4">
          <h3 className='font-bold font-dm text-sm sm:text-base lg:text-xl text-primary'>Basic Crew Neck Tee</h3>
          <span className='font-bold font-dm sm lg:text-base leading-5 md:leading-8 text-[#767676]'>$44.00</span>
        </div>
        <span className='font-normal font-dm text-base leading-8 text-[#767676]'>Black</span>
      </div>
    </div>
  
  )
}

export default ProductCard