import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <div className='w-[1280px] h-[1000px] flex items-center justify-center flex-col gap-[80px] bg-[#F7F7F7]'>
     <div className='w-[768px] h-[109px] flex items-center justify-center flex-col gap-[16px]'>
      <h1 className='text-[48px] font-bold'>Our team</h1>
      <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
     <div className='w-[1280px] h-[600px] flex flex-col items-center justify-between'>
      <div className='w-[1280px] h-[273px] flex items-center justify-center gap-[48px]'>
        <div className='w-[394.67] h-[273px] flex items-center justify-center flex-col gap-[24px]'>
          <div><Image
      src="/about-image-1.svg"
      alt="about image 1"
      width={80}
      height={80}
      /></div>
          <div className='w-[394.67px] h-[121px] flex items-center flex-col gap-[6px]'>
            <h1 className='text-[20px] font-bold'>James Nduku</h1>
            <p className='text-[18px]'>Marketing Coordinator</p>
          </div>
          <div className='w-[100px] h-[24px] flex items-center justify-center gap-[16px]'>
           <i className="bi bi-linkedin"></i>
           <i className="bi bi-twitter"></i>
           <i className="bi bi-dribbble"></i>
          </div>
        </div>
        <div className='w-[394.67] h-[273px] flex items-center justify-center flex-col gap-[24px]'>
          <div><Image
      src="/about-image-2.svg"
      alt="about image 2"
      width={80}
      height={80}
      /></div>
          <div className='w-[394.67px] h-[121px] flex items-center flex-col gap-[6px]'>
            <h1 className='text-[20px] font-bold'>Joseph Munyambu</h1>
            <p className='text-[18px]'>Nursing Assistant</p>
          </div>
          <div className='w-[100px] h-[24px] flex items-center justify-center gap-[16px]'>
           <i className="bi bi-linkedin"></i>
           <i className="bi bi-twitter"></i>
           <i className="bi bi-dribbble"></i>
          </div>
        </div>
        <div className='w-[394.67] h-[273px] flex items-center justify-center flex-col gap-[24px]'>
          <div><Image
      src="/about-image-3.svg"
      alt="about image 3"
      width={80}
      height={80}
      /></div>
          <div className='w-[394.67px] h-[121px] flex items-center flex-col gap-[6px]'>
            <h1 className='text-[20px] font-bold'>Joseph Ngumbau</h1>
            <p className='text-[18px]'>Medical Assistant</p>
          </div>
          <div className='w-[100px] h-[24px] flex items-center justify-center gap-[16px]'>
           <i className="bi bi-linkedin"></i>
           <i className="bi bi-twitter"></i>
           <i className="bi bi-dribbble"></i>
          </div>
        </div>
      </div>
      <div className='w-[1280px] h-[273px] flex items-center justify-center gap-[48px]'>
        <div className='w-[394.67] h-[273px] flex items-center justify-center flex-col gap-[24px]'>
          <div><Image
      src="/about-image-4.svg"
      alt="about image 4"
      width={80}
      height={80}
      /></div>
          <div className='w-[394.67px] h-[121px] flex items-center flex-col gap-[6px]'>
            <h1 className='text-[20px] font-bold'>Erick Kipkemboi</h1>
            <p className='text-[18px]'>Web Designer</p>
          </div>
          <div className='w-[100px] h-[24px] flex items-center justify-center gap-[16px]'>
           <i className="bi bi-linkedin"></i>
           <i className="bi bi-twitter"></i>
           <i className="bi bi-dribbble"></i>
          </div>
        </div>
        <div className='w-[394.67] h-[273px] flex items-center justify-center flex-col gap-[24px]'>
          <div><Image
      src="/about-image-5.svg"
      alt="about image 5"
      width={80}
      height={80}
      /></div>
          <div className='w-[394.67px] h-[121px] flex items-center flex-col gap-[6px]'>
            <h1 className='text-[20px] font-bold'>Stephen Kerubo</h1>
            <p className='text-[18px]'>President of Sales</p>
          </div>
          <div className='w-[100px] h-[24px] flex items-center justify-center gap-[16px]'>
           <i className="bi bi-linkedin"></i>
           <i className="bi bi-twitter"></i>
           <i className="bi bi-dribbble"></i>
          </div>
        </div>
        <div className='w-[394.67] h-[273px] flex items-center justify-center flex-col gap-[24px]'>
          <div><Image
      src="/about-image-6.svg"
      alt="about image 6"
      width={80}
      height={80}
      /></div>
          <div className='w-[394.67px] h-[121px] flex items-center flex-col gap-[6px]'>
            <h1 className='text-[20px] font-bold'>John Leboo</h1>
            <p className='text-[18px]'>Dog Trainer</p>
          </div>
          <div className='w-[100px] h-[24px] flex items-center justify-center gap-[16px]'>
           <i className="bi bi-linkedin"></i>
           <i className="bi bi-twitter"></i>
           <i className="bi bi-dribbble"></i>
          </div>
        </div>
      </div>
     </div>
     <div><button className='w-[89px] h-[40px] text-[16px] outline rounded'>View All</button></div>
    </div>
  )
}

export default about
