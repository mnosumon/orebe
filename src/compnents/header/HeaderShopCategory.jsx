import React from 'react'

const HeaderShopCategory = () => {
  return (
    <section>
      <div className="flex gap-3 items-center">
        <div className="flex flex-col gap-[4px]">
          <span className='w-5 h-[3px] bg-[#262626]'></span>
          <span className='w-4 h-[3px] bg-[#262626]'></span>
        </div>
        <p className='font-dm text-sm text-[#262626] capitalize'>Shop by category</p>
      </div>
    </section>
  )
}

export default HeaderShopCategory