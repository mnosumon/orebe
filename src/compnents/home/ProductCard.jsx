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
    <div className="max-w-[370px]">
      <Link className="max-h-[370px] relative group overflow-y-hidden bg-red-800 block">
          <div className=' max-h-[370px] relative'>
              <Image sourc={SmartWatch} alt="Smart Watch" />
              <span className='absolute top-5 left-5 font-dm text-sm font-bold leading-normal bg-primary text-white py-3 px-8'>New</span>
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
        <div className="flex justify-between mt-6 mb-4">
          <h3 className='font-bold font-dm text-xl text-primary'>Basic Crew Neck Tee</h3>
          <span className='font-bold font-dm text-base leading-8 text-[#767676]'>$44.00</span>
        </div>
        <span className='font-normal font-dm text-base leading-8 text-[#767676]'>Black</span>
      </div>
    </div>
  
  )
}

export default ProductCard