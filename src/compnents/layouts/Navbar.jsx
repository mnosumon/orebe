import React, { useEffect, useState } from 'react'
import Image from '../utilities/Image'
import Logo from '../../assets/images/logo.png'
import List from '../utilities/List'
import ListItem from '../utilities/ListItem'
import { NavLink } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  let [show, setShow] = useState(true)

  useEffect(()=>{
    function resizeWidth(e) {
      if (window.innerWidth < 1024) {
        setShow(false)
      }else{
        setShow(true)
      }
    }
    resizeWidth()
    window.addEventListener("resize", resizeWidth)
  },[])
  let handleShow = ()=>{
    setShow(!show)
  }
  return (
    <section className='max-w-container mx-auto py-8'>
        <div className="lg:flex lg:gap-[544px] justify-between items-center px-2.5">
          <div className="">
              <Image className="w-[65px] h-[15px] overflow-hidden" sourc={Logo} alt="alt"/>
          </div>
          <div className="">
            <div className="">
              <FaBarsStaggered onClick={handleShow} className='block lg:hidden text-base ml-auto absolute top-8 right-2.5'/>
            </div>
            {
              show &&
            <List className="lg:gap-10 lg:flex lg:justify-end"> 
            <li>
                <NavLink to="/" className="text-sm font-normal font-dm text-[#767676] capitalize [&.active]:scale-150 [&.active]:text-red-500">home</NavLink>
              </li>
              <li>
                <NavLink to="shop" className="text-sm font-normal font-dm text-[#767676] capitalize [&.active]:scale-150 [&.active]:text-red-500">shop</NavLink>
              </li>
              <li>
                <NavLink to="about" className="text-sm font-normal font-dm text-[#767676] capitalize [&.active]:scale-150 [&.active]:text-red-500">about</NavLink>
              </li>
              <li>
                <NavLink to="journal" className="text-sm font-normal font-dm text-[#767676] capitalize [&.active]:scale-150 [&.active]:text-red-500">journal</NavLink>
              </li>
              <li>
                <NavLink to="contact" className="text-sm font-normal font-dm text-[#767676] capitalize [&.active]:scale-150 [&.active]:text-red-500">contact</NavLink>
              </li>
            </List>
            }
          </div>
        </div>
    </section>
  )
}

export default Navbar