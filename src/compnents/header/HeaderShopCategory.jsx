import React, { useState } from 'react'
import Dropdown from '../utilities/Dropdown'
import List from '../utilities/List'

const HeaderShopCategory = () => {
  let [show, setShow] = useState(false)
  return (
    <section>
      <Dropdown setShow={setShow} className="flex gap-3 items-center">
        <div className="flex flex-col gap-[4px]">
          <span className='w-5 h-[3px] bg-[#262626]'></span>
          <span className='w-4 h-[3px] bg-[#262626]'></span>
        </div>
        <p className='font-dm text-sm text-[#262626] capitalize'>Shop by category</p>
      </Dropdown>
      {
        show && 
      <List>
        <li>dfkgjkdlsf</li>
        <li>dfkgjkdlsf</li>
        <li>dfkgjkdlsf</li>
        <li>dfkgjkdlsf</li>
        <li>dfkgjkdlsf</li>
      </List>
      }
    </section>
  )
}

export default HeaderShopCategory