import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Achievement from "./achievement";
import Category from "./category";
import Courses from "./courses";
import About from "./about";
import Testimonial from "./testimonial";
import Login from "./login";

export default function Home() {
  return (
    <div className="w-[1280px] bg-[#FFFFFF]">
      <Header />
      <div className="w-[1280px] h-[800px] bg-[#FFFFFF] flex justify-center items-center">
        <div className="w-[640px] h-[800]">
          <div className="w-[680px] h-[300px] flex justify-center pr-[60px] pl-[80px] flex-col gap-[45px]">
          <h1 className="w-[500px] h-[134px] text-[56px] font-bold">Learn new skills online with ease</h1>
          <p className="w-[500px] h-[54px] taxt-[18px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          <div className="w-[358px] h-[64px] flex gap-[16px]">
           <button className="w-[178px] h-[48px] text-[16px] bg-[#000000] text-[#FFFFFF] px-4 rounded ">
            Start learning now</button>
            <button className="w-[164px] h-[48px] text-[16px] rounded outline">
              Explore Courses</button></div>
          </div>
          </div>
        <div><Image
      src="/hero-image.svg"
      alt="hero image"
      width={640}
      height={800}></Image>
      </div>
    </div>
    <Footer />
    <Category />
    <Achievement />
    <Courses />
    <About />
    <Testimonial />
    <Login />
    </div>
    
  );
}
