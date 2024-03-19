import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const User = () => {
  return (
    <div className='flex gap-2.5 cursor-pointer items-center'>
        <FaUser className='text-base' />
        <FaCaretDown className='text-base' />
    </div>
  )
}

export default User