import React from 'react'
import Image from 'next/image'

const footer = () => {
  return (
    <div className='w-[1280px] h-[228px] bg-[#F7F7F7] flex items-center pl-[20px]'>
      <div className='w-[320px] h-[68px] text-[24px] font-bold'>Trusted by 2000+ companies worldwide.</div>
      <div className='w-[880px] h-[56px]'><Image
      src="/footer-image.svg"
      alt="footer image"
      width={880}
      height={56}
      /></div>
    </div>
  )
}

export default footer
