import React from 'react'
import H6 from '../../utilities/H6'
import { RxCross2 } from "react-icons/rx";
import H5 from '../../utilities/H5';
import List from '../../utilities/List'
import Ancor from '../../utilities/Ancor';

const CartPopUp = () => {
  return (
    <div className='border border-primary'>
      <div className="flex gap-[78px] items-center p-5 bg-[#F5F5F3]">
        <div className="flex gap-5 items-center">
          <div className="h-[80px] w-[80px] bg-[#D8D8D8]"></div>
          <div className="flex flex-col gap-3">
            <H6 className="w-[132px]" content="Black Smart Watch" />
            <H6 content="44.00$" />
          </div>
        </div>
        <div className="w-4 h-4" >
          <RxCross2 className='text-lg' />
        </div>
      </div>
      <div className="flex gap-3 px-5 pt-3">
        <H5 className="!text-fourth" content="Subtotal:" />
        <H5 content="$44.00"/>
      </div>
      <List className="flex gap-5 p-5">
        <li className='w-[148px]'>
          <Ancor content="View Cart"/>
        </li>
        <li className='w-[148px]'>
          <Ancor content='Checkout'/>
        </li>
      </List>
    </div>
  )
}

export default CartPopUp