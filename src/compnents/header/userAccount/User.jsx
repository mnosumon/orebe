import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import Dropdown from '../../utilities/Dropdown';

const User = () => {
  let [show, setShow] = useState(false)
  return (
    <section>
      <Dropdown setShow={setShow} className='flex gap-2.5 cursor-pointer items-center'>
          <FaUser className='text-base' />
          <FaCaretDown className='text-base' />
      </Dropdown>
      {
        show &&
      <div className="bg-red-500 w-[200px] h-10">
        
      </div>
      }
    </section>
  )
}

export default User