import React, { useState } from 'react'
import Dropdown from '../utilities/Dropdown'
import List from '../utilities/List'
import { Link } from 'react-router-dom'

const HeaderShopCategory = () => {
  let [show, setShow] = useState(false)
  return (
    <section className='relative'>
      <Dropdown setShow={setShow} className="flex gap-3 items-center">
        <div className="flex flex-col gap-[4px]">
          <span className='w-5 h-[3px] bg-[#262626]'></span>
          <span className='w-4 h-[3px] bg-[#262626]'></span>
        </div>
        <p className='lg:inline-block hidden font-dm text-sm text-[#262626] capitalize'>Shop by category</p>
      </Dropdown>
      {
        show && 
      <List className="bg-primary w-[263px] absolute top-7 left-0 z-50">
        <li>
          <Link className='text-sm font-dm text-[#FFFFFF] opacity-70 py-4 px-5 hover:pl-8 hover:text-[#FFF] hover:font-bold hover:opacity-100 ease-in-out duration-300 border-b border-[#2D2D2D] block'>Accesories</Link>
        </li>
        <li>
          <Link className='text-sm font-dm text-[#FFFFFF] opacity-70 py-4 px-5 hover:pl-8 hover:text-[#FFF] hover:font-bold hover:opacity-100 ease-in-out duration-300 border-b border-[#2D2D2D] block'>Furniture</Link>
        </li>
        <li>
          <Link className='text-sm font-dm text-[#FFFFFF] opacity-70 py-4 px-5 hover:pl-8 hover:text-[#FFF] hover:font-bold hover:opacity-100 ease-in-out duration-300 border-b border-[#2D2D2D] block'>Electronics</Link>
        </li>
        <li>
          <Link className='text-sm font-dm text-[#FFFFFF] opacity-70 py-4 px-5 hover:pl-8 hover:text-[#FFF] hover:font-bold hover:opacity-100 ease-in-out duration-300 border-b border-[#2D2D2D] block'>Clothes</Link>
        </li>
        <li>
          <Link className='text-sm font-dm text-[#FFFFFF] opacity-70 py-4 px-5 hover:pl-8 hover:text-[#FFF] hover:font-bold hover:opacity-100 ease-in-out duration-300 border-b border-[#2D2D2D] block'>Bags</Link>
        </li>
        <li>
          <Link className='text-sm font-dm text-[#FFFFFF] opacity-70 py-4 px-5 hover:pl-8 hover:text-[#FFF] hover:font-bold hover:opacity-100 ease-in-out duration-300 border-b border-[#2D2D2D] block'>Home appliances</Link>
        </li>
      </List>
      }
    </section>
  )
}

export default HeaderShopCategory