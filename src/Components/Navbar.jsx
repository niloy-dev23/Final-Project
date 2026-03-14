import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import bgImage from '../assets/Rectangle.png'
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='flex items-center h-22 z-100 border-b border-b-[#66645D] text-primary'>
        <img src={bgImage} alt="Background" className='absolute top-0 left-0 -z-10'/>
        <h1 className='text-[38px] p-7 border-r border-r-[#66645D]'>P</h1>
        <div className='flex text-[16px] pl-7 gap-8 pr-120 border-r border-r-[#66645D] h-full items-center'>
            <FaFacebookF />
            <FaTwitter/>
            <FaLinkedin/>
        </div>
        <div className='flex text-[14px] px-7 justify-between w-full'>
            <div className='flex gap-15'>
                <NavLink to="/" className={({ isActive}) =>
     isActive ? "text-[#B66449]" : "hover:text-[#B66449] transition-colors duration-300"
  }>HOME</NavLink>
                <NavLink to="/projects" className={({ isActive}) =>
     isActive ? "text-[#B66449]" : "hover:text-[#B66449] transition-colors duration-300"
  }>PROJECTS</NavLink>
                <NavLink to="/awards" className={({ isActive}) =>
     isActive ? "text-[#B66449]" : "hover:text-[#B66449] transition-colors duration-300"
  }>AWARDS</NavLink>
                <NavLink to="/testimonials" className={({ isActive}) =>
     isActive ? "text-[#B66449]" : "hover:text-[#B66449] transition-colors duration-300"
  }>TESTIMONIALS</NavLink>
                  <NavLink to="/experience" className={({ isActive}) =>
    isActive ? "text-[#B66449]" : "hover:text-[#B66449] transition-colors duration-300"
  }>EXPERIENCE</NavLink>
                <NavLink to="/blog" className={({ isActive}) =>
     isActive ? "text-[#B66449]" : "hover:text-[#B66449] transition-colors duration-300"
  }>BLOG</NavLink>
                <NavLink to="/contact" className={({ isActive}) =>
    isActive ? "text-[#B66449]" : "hover:text-[#B66449] transition-colors duration-300"
  }>CONTACT</NavLink>
            </div>
            <p>+2(315) 590 83 68</p>
        </div>
    </div>
  )
}

export default Navbar