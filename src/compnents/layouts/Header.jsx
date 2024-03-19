import React from 'react'
import Container from '../utilities/Container'
import Input from '../utilities/Input'
import { IoSearch } from "react-icons/io5";
import HeaderShopCategory from '../header/HeaderShopCategory';
import User from '../header/userAccount/User';
import Cart from '../header/userAccount/Cart';

const Header = () => {
  return (
    <header className='bg-[#F5F5F3]'>
        <Container>
            <div className="flex justify-between py-6 items-center">
                <HeaderShopCategory/>
                <div className="w-[600px] relative">
                    <Input className="text-[#C4C4C4] py-4 pl-5 pr-10 bg-[#ffffff] w-full" type="text" placeholder="Search Products"  />
                    <IoSearch className='absolute top-1/2 right-5 -translate-y-1/2 text-base'/>
                </div>
                <div className="flex gap-10">
                  <User/>
                  <Cart/>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header