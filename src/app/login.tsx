import React from 'react'
import Image from 'next/image'

const login = () => {
  return (
    <div className='w-[1280px] h-[684px] bg-[#FFFFFF] flex justify-center items-center'>
        <div className='w-[1120px] h-[524px] flex flex-col gap-[80px]'>
          <div className='w-[1120px] h-[82px] flex justify-between'>
            <div>
              <h1 className='text-[18px] font-bold'>Subscribe to our newsletter</h1>
              <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='w-[400px] h-[82px] flex flex-col gap-[16px]'>
              <div className='w-[400px] h-[48px] flex justify-between'>
                <button className='w-[265px] h-[48px] border border-[#000000] rounded text-[16px]'>
                  Enter your email</button>
                <button className='w-[119px] h-[48px] border border-[#000000] rounded text-[16px]'>
                  Subscribe</button>
              </div>
              <div className='w-[400px] h-[20px] flex items-center gap-[5px]'>
                <div>
                 <p className='text-[12px]'>By subscribing you agree to with our </p>
               </div>
               <div>
                 <a className="underline text-[12px]" href='/'>Privacy Policy</a>
                </div>
               
              </div>
            </div>
          </div>
          <div className='w-[1120px] h-[225px] gap-[40px] flex'>
            <div className='w-[250px] h-[40px]'>
              <Image
              src="login-1.svg"
              alt="login-Image"
              width={130.6}
              height={30.38}
              />
            </div>
            <div className='w-[250px] h-[225px] flex flex-col gap-[16px]'>
              <h1 className='font-bold text-[16px]'>Courses</h1>
              <div className='w-[250px] h-[185px] flex flex-col text-[14px] gap-[16px]'>
                <p>Business</p>
                <p>Development</p>
                <p>Technology</p>
                <p>Design</p>
                <p>Programming</p>
              </div>
            </div>
            <div className='w-[250px] h-[225px] flex flex-col gap-[16px]'>
              <h1 className='font-bold text-[16px]'>Resources</h1>
              <div className='w-[250px] h-[185px] flex flex-col text-[14px] gap-[16px]'>
                <p>Career</p>
                <p>Resume</p>
                <p>Learning</p>
                <p>Interview Preparation</p>
                <p>Jobs</p>
              </div>
            </div>
            <div className='w-[250px] h-[225px] flex flex-col gap-[16px]'>
              <h1 className='font-bold text-[16px]'>About Us</h1>
              <div className='w-[250px] h-[185px] flex flex-col text-[14px] gap-[16px]'>
                <p>Contact</p>
                <p>Help/Support</p>
                <p>FAQ</p>
                <p>Terms and Conditions</p>
                <p>Partners</p>
              </div>
            </div>
          </div>
          <div className='w-[1120px] h-[57px] flex justify-between flex-col'>
            <div className="w-[1120px] border-t-2 border-[#000000] my-4"></div>
            <div className='w-[1120px] h-[24px] flex justify-between justify-center items-center'>
              <div className='w-[564px] h-[21px] flex justify-between items-center'>
                <p className='text-[14px]'>2023 Ddsgnr. All right reserved.</p>
                <a className='underline text-[12px]' href='/'>Privacy Policy</a>
                <a className='underline text-[12px]' href='/'>Terms of Service</a>
                <a className='underline text-[12px]' href='/'>Cookies Settings</a>
              </div>
              <div className='w-[132px] h-[24px] flex gap-[12px]'>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default login
