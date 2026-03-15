import React from 'react'
import Sidebar from '../Components/Sidebar'
import Companies from '../assets/Companies.png'
import MySlider from '../Components/MySlider'
import Quote from '../assets/Quote.png'

const Testimonials = () => {

  return (
    <>
        <Sidebar
            name='TESTIMONIALS'
            version='4.0'
        />
        <div className='flex ml-20'>
          <div className='p-7 w-154.75 border-r border-r-borderColor'>
            <h1 className='text-[76px] font-medium'>+250</h1>
            <p>I love my work and every project is my pride </p>
            <h2 className='text-[76px] font-medium ml-55'>HAPPY</h2>
            <h2 className='text-[76px] font-medium ml-22'>CLIENTS</h2>
            <img src={Companies} alt="Company" className='mt-75'/>
          </div>
          <div className='p-7'>
            <h2 className='w-128.5 font-medium text-[40px]'><span className='text-[#B66449]'>Creative</span> & dedicated is things that my studio brings for your business</h2>
            <MySlider className='mt-60'>
              <div className='w-full px-50'>
                <img src={Quote} alt="quotes" className='w-150'/>
              </div>
              <div className='w-full px-50'>
                <img src={Quote} alt="quotes" className='w-150'/>
              </div>
              <div className='w-full px-50'>
                <img src={Quote} alt="quotes" className='w-150'/>
              </div>
              <div className='w-full px-50'>
                <img src={Quote} alt="quotes" className='w-150'/>
              </div>
              <div className='w-full px-50'>
                <img src={Quote} alt="quotes" className='w-150'/>
              </div>
            </MySlider>
          </div>
        </div>
    </>
  )
}

export default Testimonials