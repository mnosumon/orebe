import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Dropdown from '../../utilities/Dropdown';

const Cart = () => {
  let [show, setShow] = useState(false)
  return (
    <section>

      <Dropdown setShow={setShow}>
          <FaShoppingCart className='text-lg cursor-pointer' />
      </Dropdown>
        {
          show && 
        <div className="w-[360px] bg-slate-600 h-28"></div>
        }
    </section>
  )
}

export default Cart