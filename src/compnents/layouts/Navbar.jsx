import React from 'react'
import Image from '../utilities/Image'
import Logo from '../../assets/images/logo.png'
import List from '../utilities/List'
import ListItem from '../utilities/ListItem'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <section className='max-w-container mx-auto'>
        <div className="flex gap-[544px]">
          <div className="">
              <Image className="w-[65px] h-[15px] overflow-hidden" sourc={Logo} alt="alt"/>
          </div>
          <div className="">
            <List className="gap-10">
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
          </div>
        </div>
    </section>
  )
}

export default Navbar