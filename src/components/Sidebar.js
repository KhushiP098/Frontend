import React from 'react'
import Img1 from "../Images/Img1.jpg"
import Img2 from "../Images/Img2.jpg"
import Img3 from "../Images/Img3.jpg"
import Img4 from "../Images/Img4.png"
import Img5 from "../Images/Img5.jpg"
import Img6 from "../Images/Img6.jpg"
import Img7 from "../Images/Img7.jpg"
import logo from "../Images/logo.jpg"
import Line from '../Images/Line.jpg'

const Sidebar = () => {
    return (
        <div className="lg:w-[240px] md:w-[180px]  w-[150px]  bg-[#FFF]  ">


            <div className='grid grid-cols-1 content-between h-full '>

                <div className='flex flex-col '>
                    <div className='my-8 mx-auto md:w-[76.114px] md:h-[27px] w-[55px] h-[20px] '><img src={logo} className='w-full h-full' /></div>

                    {/* line */}
                    <div className=' flex justify-center'><img src={Line} className='lg:w-[200px] md:w-[150px] h-[1px] w-[100px]' /></div>

                    <div className='flex flex-col items-start ml-8 m-4 '>
                        <div className='flex m-2 gap-2 items-center cursor-pointer '><img src={Img2} className='md:w-[28px] md:h-[28px] ' /><span className='line text-[#FA782F] font-semibold text-xs md:text-sm md:leading-7 font-sans'>My Projects</span></div>
                        <div className='flex m-2 gap-2 items-center cursor-pointer '><img src={Img7} className='md:w-[24px] md:h-[24px] ' /><span className='font-sans md:text-sm  text-xs font-semibold md:leading-5 text-[#C4C4C4]'>Sample Projects</span></div>
                    </div>

                    {/* line */}
                    <div className=' flex justify-center'><img src={Line} className=' lg:w-[200px] md:w-[150px] h-[1px] w-[100px]' /></div>


                    <div className='flex flex-col items-start ml-8 m-4 '>
                        <div className='flex m-2 gap-2 items-center cursor-pointer'><img src={Img4} className='md:w-[28px] md:h-[28px]' /><span className='font-sans md:text-sm text-xs font-semibold md:leading-7 text-[#C4C4C4]'>Apps</span></div>
                        <div className='flex m-2 gap-2 items-center cursor-pointer' ><img src={Img5} className='md:w-[23px] md:h-[23px]' /><span className='font-sans md:text-sm text-xs font-semibold md:leading-5 text-[#C4C4C4]'>Intro to Necleo</span></div>

                    </div>
                </div>

                <div className='h-[509.5px]'></div>

                <div className='flex flex-col  ml-8 m-4'>
                    <div className='flex items-center m-2 gap-2 cursor-pointer'><img src={Img1} className='md:w-[28px] md:h-[28px]' /><span className='font-sans md:text-sm  text-xs font-semibold md:leading-7 text-[#C4C4C4]'>Help & Support</span></div>
                    <div className='flex items-center m-2 gap-2 cursor-pointer'><img src={Img6} className='md:w-[28px] md:h-[28px]' /><span className='font-sans md:text-sm text-xs font-semibold md:leading-7 text-[#C4C4C4]'>Feedback</span></div>
                    <div className='flex items-center m-2 gap-2 cursor-pointer'><img src={Img3} className='md:w-[28px] md:h-[28px]' /><span className='font-sans md:text-sm  text-xs font-semibold md:leading-7 '>Collapse</span></div>
                </div>

            </div>


        </div>
    )
}

export default Sidebar;