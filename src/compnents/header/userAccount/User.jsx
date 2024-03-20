import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import Dropdown from '../../utilities/Dropdown';
import List from '../../utilities/List';
import Ancor from '../../utilities/Ancor';

const User = () => {
  let [show, setShow] = useState(false)
  return (
    <section className='relative'>
      <Dropdown setShow={setShow}>
        <div className='flex lg:gap-2.5 gap-1 cursor-pointer items-center'>
          <FaUser className='text-base' />
          <FaCaretDown className='text-base' />
        </div>
        {
        show &&
        <div className=" w-[200px] absolute top-7 right-0 border border-primary">
          <List>
            <li>
              <Ancor href="#" className="border-none hover:bg-[#2B2B2B]" content="My Account"/>
            </li>
            <li>
              <Ancor href="#" className="border-none hover:bg-[#2B2B2B]" content="Log Out"/>
            </li>
          </List>
        </div>
      }
      </Dropdown>
    </section>
  )
}

export default User