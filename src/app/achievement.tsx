import React from 'react'

const achievement = () => {
  return (
    <div className='w-[1280px] h-[488px] bg-[#FFFFFF] flex items-center justify-center'>
      <div className='w-[1152px] h-[264px] flex flex-col items-center justify-center gap-[24px]'>
        <div className='w-[1152px] h-[136px] flex flex-col items-center justify-center'>
          <h1 className='text-[48px] font-bold gap-[16px]'>Our Achivements</h1>
          <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          </p>
          <p className='text-[18px] flex items-center justify-center'> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <div className='w-[1256px] h-[96px] flex items-center justify-center gap-[235px]'>
          <div><h1 className='text-[40px] font-bold'>+200</h1><p className='text-[16px]'>Courses</p></div>
          <div><h1 className='text-[40px] font-bold'>50k</h1><p className='text-[16px]'>Mentors</p></div>
          <div><h1 className='text-[40px] font-bold'>370k</h1><p className='text-[16px]'>Students</p></div>
          <div><h1 className='text-[40px] font-bold'>100+</h1><p className='text-[16px]'>Recognition</p></div>
        </div>
      </div>
    </div>
  )
}

export default achievement
