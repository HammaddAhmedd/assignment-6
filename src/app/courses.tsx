import React from 'react'
import Image from 'next/image'
import "bootstrap-icons/font/bootstrap-icons.css";

const courses = () => {
  return (
    <div className='w-[1280px] h-[1742px] bg-[#FFFFFF] flex justify-center flex-col items-center gap-[25px]'>
      <div className='w-[768px] h-[118px] flex flex-col justify-center items-center gap-[16px]'>
        <h1 className='text-[56px] font-bold'>Courses</h1>
        <p className='text-[18px]'>Your Ultimate Guide to Learning</p>
      </div>
      <div className='w-[1280px] h-[1340px] flex justify-center flex-col items-center gap-[64px]'>
      <div className='w-[336px] h-[40px] text-[16px] flex justify-between'>
        <p>Popular</p><p>Recommended</p><p>Best Price</p></div>
        <div className='w-[1280px] h-[534px] flex justify-center items-center justify-between'>
          <div className='w-[416px] h-[534px] bg-[#F7F7F7] flex flex-col justify-between'>
            <div className='w-[416px] h-[300px]'><Image
      src="/courses-image-1.svg"
      alt="courses image 1"
      width={416}
      height={300}
      /></div>
            <div className='w-[416px] h-[200px] flex flex-col gap-[12px]'>
              <div className='w-[382px] h-[24px] text-[14px] font-bold flex justify-center items-center justify-between'>
                <h1>Design</h1><h1><i className="bi bi-star w-[24px] h-[24px]"></i>5.0</h1></div>
                <div><h1 className='w-[382px] h-[34px] text-[24px] font-bold'>UX/UI Design 201</h1></div>
                <div><p className='w-[382px] h-[48px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p></div>
                  <div className='w-[382px] h-[40px] flex gap-[20px] items-center text-[16px]'>
                    <button className='w-[117px] h-[40px] rounded outline'>Enroll Now</button>
                    <h1 className='font-bold'>$400</h1></div>
            </div>
          </div>
          <div>
          <div className='w-[416px] h-[534px] bg-[#F7F7F7] flex flex-col justify-between'>
            <div className='w-[416px] h-[300px]'><Image
      src="/courses-image-2.svg"
      alt="courses image 2"
      width={416}
      height={300}
      /></div>
            <div className='w-[416px] h-[200px] flex flex-col gap-[12px]'>
              <div className='w-[382px] h-[24px] font-bold text-[14px] flex justify-center items-center justify-between'>
                <h1>Programmimg</h1><h1><i className="bi bi-star w-[24px] h-[24px]"></i>5.0</h1></div>
                <div><h1 className='w-[382px] h-[34px] text-[24px] font-bold'>Introduction to Python</h1></div>
                <div><p className='w-[382px] h-[48px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p></div>
                  <div className='w-[382px] h-[40px] flex gap-[20px] items-center text-[16px]'>
                    <button className='w-[117px] h-[40px] rounded outline'>Enroll Now</button>
                    <h1 className='font-bold'>$400</h1></div>
            </div>
          </div>
          </div>
          <div>
          <div className='w-[416px] h-[534px] bg-[#F7F7F7] flex flex-col justify-between'>
            <div className='w-[416px] h-[300px]'><Image
      src="/courses-image-3.svg"
      alt="courses image 3"
      width={416}
      height={300}
      /></div>
            <div className='w-[416px] h-[200px] flex flex-col gap-[12px]'>
              <div className='w-[382px] h-[24px] font-bold text-[14px] flex justify-center items-center justify-between'>
                <h1>Business</h1><h1><i className="bi bi-star w-[24px] h-[24px]"></i>5.0</h1></div>
                <div><h1 className='w-[382px] h-[34px] text-[24px] font-bold'>Data Analysis for Beginners</h1></div>
                <div><p className='w-[382px] h-[48px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p></div>
                  <div className='w-[382px] h-[40px] flex gap-[20px] items-center text-[16px]'>
                    <button className='w-[117px] h-[40px] rounded outline'>Enroll Now</button>
                    <h1 className='font-bold'>$400</h1></div>
            </div>
          </div>
          </div>
        </div>
        <div className='w-[1280px] h-[534px] flex justify-center items-center justify-between'>
          <div className='w-[416px] h-[534px] bg-[#F7F7F7] flex flex-col justify-between'>
            <div className='w-[416px] h-[300px]'><Image
      src="/courses-image-4.svg"
      alt="courses image 4"
      width={416}
      height={300}
      /></div>
            <div className='w-[416px] h-[200px] flex flex-col gap-[12px]'>
              <div className='w-[382px] h-[24px] font-bold text-[14px] flex justify-center items-center justify-between'>
                <h1>Art</h1><h1><i className="bi bi-star w-[24px] h-[24px]"></i>5.0</h1></div>
                <div><h1 className='w-[382px] h-[34px] text-[24px] font-bold'>Art Specialization</h1></div>
                <div><p className='w-[382px] h-[48px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p></div>
                  <div className='w-[382px] h-[40px] flex gap-[20px] items-center text-[16px]'>
                    <button className='w-[117px] h-[40px] rounded outline'>Enroll Now</button>
                    <h1 className='font-bold'>$400</h1></div>
            </div>
          </div>
          <div>
          <div className='w-[416px] h-[534px] bg-[#F7F7F7] flex flex-col justify-between'>
            <div className='w-[416px] h-[300px]'><Image
      src="/courses-image-5.svg"
      alt="courses image 5"
      width={416}
      height={300}
      /></div>
            <div className='w-[416px] h-[200px] flex flex-col gap-[12px]'>
              <div className='w-[382px] h-[24px] text-[14px] font-bold flex justify-center items-center justify-between'>
                <h1>Law</h1><h1><i className="bi bi-star w-[24px] h-[24px]"></i>5.0</h1></div>
                <div><h1 className='w-[382px] h-[34px] text-[24px] font-bold'>Rule of Law</h1></div>
                <div><p className='w-[382px] h-[48px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p></div>
                  <div className='w-[382px] h-[40px] flex gap-[20px] items-center text-[16px]'>
                    <button className='w-[117px] h-[40px] rounded outline'>Enroll Now</button>
                    <h1 className='font-bold'>$400</h1></div>
            </div>
          </div>
          </div>
          <div>
          <div className='w-[416px] h-[534px] bg-[#F7F7F7] flex flex-col justify-between'>
            <div className='w-[416px] h-[300px]'><Image
      src="/courses-image-6.svg"
      alt="courses image 6"
      width={416}
      height={300}
      /></div>
            <div className='w-[416px] h-[200px] flex flex-col gap-[12px]'>
              <div className='w-[382px] h-[24px] text-[14px] font-bold flex justify-center items-center justify-between'>
                <h1>Tech</h1><h1><i className="bi bi-star w-[24px] h-[24px]"></i>5.0</h1></div>
                <div><h1 className='w-[382px] h-[34px] text-[24px] font-bold'>Introduction to webflow</h1></div>
                <div><p className='w-[382px] h-[48px] text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                  </p></div>
                  <div className='w-[382px] h-[40px] flex gap-[20px] items-center text-[16px]'>
                    <button className='w-[117px] h-[40px] rounded outline'>Enroll Now</button>
                    <h1 className='font-bold'>$400</h1></div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div><button className='w-[152px] h-[40px] rounded outline text-[16px]'>View All Courses</button></div>
    </div>
  )
}

export default courses
