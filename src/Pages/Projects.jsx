import React from 'react'
import Sidebar from '../Components/Sidebar'
import { FaArrowRightLong } from 'react-icons/fa6'
import ShowButton from '../Components/ShowButton'
import MySlider from '../Components/MySlider'
import webImage from '../assets/website.png'

const Projects = () => {
  return (
    <>
        <Sidebar
            name='PORTFOLIO'
            version='2.0'
        />
        <div className='ml-20 flex gap-7.5'>
            <div className='w-154.75 border-r border-r-borderColor'>
                <h2 className='font-medium text-[76px] ml-7'>PROJECTS</h2>
                <div className='mt-32.75 mb-18'>
                  <div className='py-2 px-7 text-[22px] border-y border-y-primary opacity-50 hover:opacity-100 transition-all duration-400 cursor-pointer flex justify-between items-center'><h1>BERLING AGENCY WEBSITE</h1><FaArrowRightLong className='-rotate-45'/></div>
                  <div className='py-2 px-7 text-[22px] border-y border-y-primary opacity-50 hover:opacity-100 transition-all duration-400 cursor-pointer flex justify-between items-center'><h1>PRETTYLITTLETHING AMERICAN SHOP</h1><FaArrowRightLong className='-rotate-45'/></div>
                  <div className='py-2 px-7 text-[22px] border-y border-y-primary opacity-50 hover:opacity-100 transition-all duration-400 cursor-pointer flex justify-between items-center'><h1>BENHOME - ARCHITECTURE THEME</h1><FaArrowRightLong className='-rotate-45'/></div>
                  <div className='py-2 px-7 text-[22px] border-y border-y-primary opacity-50 hover:opacity-100 transition-all duration-400 cursor-pointer flex justify-between items-center'><h1>GILHOUSE - ARCHITECTURE WEBSITE</h1><FaArrowRightLong className='-rotate-45'/></div>
                  <div className='py-2 px-7 text-[22px] border-y border-y-primary opacity-50 hover:opacity-100 transition-all duration-400 cursor-pointer flex justify-between items-center'><h1>GILBER - PERSONAL WEBSITE</h1><FaArrowRightLong className='-rotate-45'/></div>
                  <div className='py-2 px-7 text-[22px] border-y border-y-primary opacity-50 hover:opacity-100 transition-all duration-400 cursor-pointer flex justify-between items-center'><h1>JONNY - PERSONAL WEBSITE</h1><FaArrowRightLong className='-rotate-45'/></div>
                </div>
                <ShowButton
                  buttonWork='VIEW ALL WORKS'
                />
            </div>
            <div>
              <MySlider>
                  <img src={webImage} alt="Web" />
                  <img src={webImage} alt="Web" />
                  <img src={webImage} alt="Web" />
                  <img src={webImage} alt="Web" />
                  <img src={webImage} alt="Web" />
              </MySlider>
              
            </div>
        </div>
    </>
  )
}

export default Projects