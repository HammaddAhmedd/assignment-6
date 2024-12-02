import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from 'next/image';

const header = () => {
  return (
    <div className='border-b border-gray-600'>
    <div className="w-[1280px] h-[54px] pr-[64px] pl-[62px] top-[100px] left-[100px] bg-[#F7F7F7] border-b border-gray-600">
      <div className="w-[1154px] h-[54px] pt-[12px] pb-[12px] gap-[32px] flex ">
      <div>
        <p className="text-[14px]">
          Phone Number: 956 742 455 678 
          <span className=" mr-[10px] ml-[12px] border border-[#676767]"></span>
           Email:info@ddsgnr.com</p>
           </div>
           <div className="flex justify-end w-[736px] h-[24px] gap-[16px]">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-linkedin"></i>
        </div>
        </div> 
    </div>
    <div className='w-[1280px] h-[72px] pr-[64px] pl-[64] top-[170px] left-[100px] bg-[#F7F7F7]
     flex justify-center items-center '>
      <div className='w-[1154px] h-[44px] flex justify-between justify-center items-center'>
        <div className='w-[130.6px] h-[41px]'>
          <Image
      src="/header-image.svg"
      alt="header image"
      width={130.6}
      height={30.38}
      /></div>
        <div className='w-[910px] h-[44px] flex justify-center items-center '>
          <div className="w-[840px] h-[44px] bg-[#FFFFFF]  p-4 flex justify-center items-center gap-[32px] ">
          <div>Home</div>
          <div>Courses</div>
          <div>Services</div>
          <div>Achievement</div>
          <div>About Us</div>
          <div>Testimonial</div>
          <div><button className='w-[80px] h-[40px] rounded outline'>Login</button></div>
          <div><button className='w-[95px] h-[40px] bg-[#000000] text-[#FFFFFF] px-4 outline rounded'>Sign Up</button></div>
          </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default header
