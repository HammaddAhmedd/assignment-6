import React from 'react'
import Image from 'next/image';

const category = () => {
  return (
    <div className='w-[1280px] h-[1049px] bg-[#FFFFFF] flex justify-center flex-col items-center gap-[25px]'>
      <div className='w-[768px] h-[109px] flex flex-col'>
        <h1 className='text-[48px] font-bold'>Explore Courses By Category</h1>
        <p className='text-[18px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
      <div className='w-[1280px] h-[636px] flex justify-center flex-col items-center gap-[96px]'>
        <div className='w-[1280px] h-[132px] flex justify-between'>
          <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex items-center gap-[10px] pl-[16px]'>
            <div className='w-[100px] h-[100px]'><Image
      src="/pen-tool.svg"
      alt="pen image"
      width={100}
      height={100}
      /></div>
            <div className='w-[246.67px] h-[57px] '>
              <p className='font-bold text-[20px]'>Design & Development</p>
              <p className='text-[18px]'>50+ Courses Available</p>
            </div>
          </div>
          <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex items-center gap-[10px] pl-[16px]'>
          <div className='w-[100px] h-[100px]'><Image
      src="/volume-high.svg"
      alt="pen image"
      width={100}
      height={100}
      /></div>
            <div className='w-[246.67px] h-[57px] '>
              <p className='font-bold text-[20px]'>Marketing</p>
              <p className='text-[18px]'>50+ Courses Available</p>
            </div>
            </div>
          <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex items-center gap-[10px] pl-[16px]'>
          <div className='w-[100px] h-[100px]'><Image
      src="/linear-group.svg"
      alt="pen image"
      width={100}
      height={100}
      /></div>
            <div className='w-[246.67px] h-[57px] '>
              <p className='font-bold text-[20px]'>Development</p>
              <p className='text-[18px]'>50+ Courses Available</p>
            </div>
            </div>
        </div>
        <div className='w-[1280px] h-[132px] flex justify-between'>
          <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex items-center gap-[10px] pl-[16px]'>
          <div className='w-[100px] h-[100px]'><Image
      src="/micro-phone.svg"
      alt="pen image"
      width={100}
      height={100}
      /></div>
            <div className='w-[246.67px] h-[57px] '>
              <p className='font-bold text-[20px]'>Communication</p>
              <p className='text-[18px]'>50+ Courses Available</p>
            </div>
            </div>
          <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex items-center gap-[10px] pl-[16px]'>
          <div className='w-[100px] h-[100px]'><Image
      src="/linear-link.svg"
      alt="pen image"
      width={100}
      height={100}
      /></div>
            <div className='w-[246.67px] h-[57px] '>
              <p className='font-bold text-[20px]'>Digital Marketing</p>
              <p className='text-[18px]'>50+ Courses Available</p>
            </div>
            </div>
          <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex items-center gap-[10px] pl-[16px]'>
          <div className='w-[100px] h-[100px]'><Image
      src="/arrow-2.svg"
      alt="pen image"
      width={100}
      height={100}
      /></div>
            <div className='w-[246.67px] h-[57px] '>
              <p className='font-bold text-[20px]'>Self Development</p>
              <p className='text-[18px]'>50+ Courses Available</p>
            </div>
            </div>
          </div>
        <div className='w-[1280px] h-[132px] flex justify-between'>
          <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex items-center gap-[10px] pl-[16px]'>
          <div className='w-[100px] h-[100px]'><Image
      src="/briefcase.svg"
      alt="pen image"
      width={100}
      height={100}
      /></div>
            <div className='w-[246.67px] h-[57px] '>
              <p className='font-bold text-[20px]'>Business</p>
              <p className='text-[18px]'>50+ Courses Available</p>
            </div>
            </div>
          <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex items-center gap-[10px] pl-[16px]'>
          <div className='w-[100px] h-[100px]'><Image
      src="/book.svg"
      alt="pen image"
      width={100}
      height={100}
      /></div>
            <div className='w-[246.67px] h-[57px] '>
              <p className='font-bold text-[20px]'>Finance</p>
              <p className='text-[18px]'>50+ Courses Available</p>
            </div>
            </div>
          <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex items-center gap-[10px] pl-[16px]'>
          <div className='w-[100px] h-[100px]'><Image
      src="/book-2.svg"
      alt="pen image"
      width={100}
      height={100}
      /></div>
            <div className='w-[246.67px] h-[57px] '>
              <p className='font-bold text-[20px]'>Consulting</p>
              <p className='text-[18px]'>50+ Courses Available</p>
            </div>
            </div>
          </div>
      </div>
      <button className='w-[155px] h-[48px] rounded outline text-[16px]'>View All Courses</button>
    </div>
  )
}

export default category
