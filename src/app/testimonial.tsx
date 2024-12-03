import React from 'react'
import Image from 'next/image'

const testimonial = () => {
  return (
    <div className='w-[1280px] h-[830.89px] bg-[#F7F7F7] flex flex-col justify-center pl-[50px] gap-[80px]'>
      <div className='w-[560px] h-[109px] flex flex-col gap-[24px]'>
        <h1 className='text-[48px] font-bold'>Customer testimonials</h1>
        <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='w-[1152px] h-[417.89px] flex flex-col justify-between'>
        <div className='w-[1152px] h-[321.89px] flex justify-between justify-center'>
            <div className='w-[362.67px] h-[321.89px] flex justify-between justify-center flex-col p-[32px] outline'>
                <div className='w-[116px] h-[18.89px]'>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                </div>
                <div className='w-[298.67px] h-[215px] flex flex-col justify-between'>
                    <div>
                        <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                    </div>
                    <div className='w-[215px] h-[56px] flex justify-center justify-between'>
                        <div>
                            <Image
                            src="/testimonal-image-1.svg"
                            alt="testimonal-image-1"
                            width={56}
                            height={56} />
                        </div>
                        <div>
                            <h1 className='font-bold text-[16px]'>James Nduku</h1>
                            <p className='text-[16px]'>Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[362.67px] h-[321.89px] flex justify-between justify-center flex-col p-[32px] outline'>
                <div className='w-[116px] h-[18.89px]'>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                </div>
                <div className='w-[298.67px] h-[215px] flex flex-col justify-between'>
                    <div>
                        <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                    </div>
                    <div className='w-[215px] h-[56px] flex justify-center justify-between'>
                        <div>
                            <Image
                            src="/testimonal-image-2.svg"
                            alt="testimonal-image-2"
                            width={56}
                            height={56} />
                        </div>
                        <div>
                            <h1 className='font-bold text-[16px]'>James Nduku</h1>
                            <p className='text-[16px]'>Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[362.67px] h-[321.89px] flex justify-between justify-center flex-col p-[32px] outline'>
                <div className='w-[116px] h-[18.89px]'>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                </div>
                <div className='w-[298.67px] h-[215px] flex flex-col justify-between'>
                    <div>
                        <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                    </div>
                    <div className='w-[215px] h-[56px] flex justify-center justify-between'>
                        <div>
                            <Image
                            src="/testimonal-image-3.svg"
                            alt="testimonal-image-3"
                            width={56}
                            height={56} />
                        </div>
                        <div>
                            <h1 className='font-bold text-[16px]'>James Nduku</h1>
                            <p className='text-[16px]'>Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[1152px] h-[48px] flex justify-between items-center'>
            <div>
                <i className="text-3xl text-[#8D8D8D] bi bi-dot"></i>
                <i className="text-3xl text-[#8D8D8D] bi bi-dot"></i>
                <i className="text-3xl text-[#8D8D8D] bi bi-dot"></i>
                <i className="text-3xl text-[#8D8D8D] bi bi-dot"></i>
                <i className="text-3xl text-[#8D8D8D] bi bi-dot"></i>
            </div>
            <div className='flex gap-[10px]'>
                <div><i className="text-4xl bi bi-arrow-left-circle"></i></div>
                <div><i className="text-4xl bi bi-arrow-right-circle"></i></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default testimonial
