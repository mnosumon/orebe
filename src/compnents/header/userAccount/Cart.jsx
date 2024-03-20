import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Dropdown from '../../utilities/Dropdown';
import CartPopUp from './CartPopUp';

const Cart = () => {
  let [show, setShow] = useState(false)
  return (
    <section className='relative'>
      <Dropdown setShow={setShow}>
          <FaShoppingCart className='text-lg cursor-pointer' />
          {
        show && 
        <div className="w-[360px] absolute right-0 top-7">
            <CartPopUp/>
        </div>
        }
      </Dropdown>
    </section>
  )
}

export default Cart