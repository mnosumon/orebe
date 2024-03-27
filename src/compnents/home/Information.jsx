import React from 'react'
import Container from '../utilities/Container'
import { RiNumber2 } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { IoReload } from "react-icons/io5";
import Regular16px from '../utilities/Regular16px';

const Information = () => {
  return (
    <section className='border-y border-[#F0F0F0]'>
        <Container>
            <div className="flex justify-between py-2 md:py-[22px] items-center">
                <div className="flex md:gap-4 sm:gap-2 gap-[2px] items-center">
                    <RiNumber2 className='sm:text-lg md:text-2xl text-[10px]' />
                    <p className="text-[8px] sm:text-sm md:text-base text-[#6D6D6D] ">Two years warranty</p>
                </div>
                <div className="flex md:gap-4 sm:gap-2 gap-[2px] items-center">
                    <MdLocalShipping className='sm:text-lg md:text-2xl text-[10px]'  />
                    <p className="text-[8px] sm:text-sm md:text-base text-[#6D6D6D] ">Free shipping</p>
                </div>
                <div className="flex md:gap-4 sm:gap-2 gap-[2px] items-center">
                    <IoReload className='sm:text-lg md:text-2xl text-[10px]'  />
                    <p className="text-[8px] sm:text-sm md:text-base text-[#6D6D6D] ">Return policy in 30 days</p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Information