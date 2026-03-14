import React from 'react'
import Grid from '../assets/Grid.png'
import Sidebar from '../Components/Sidebar'
import { FaArrowRightLong } from 'react-icons/fa6'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import firstImage from '../assets/firstImage.png'
import MySlider from '../Components/MySlider';
import ShowButton from '../Components/ShowButton';


const Home = () => {

  return (
    <div className="text-primary">
          <Sidebar
              name="MY NAME IS ROBERT"
              version="1.0" 
          />
          <div className='flex ml-18'>
            <div className='p-6 w-156.5'>
              <div className='flex w-full justify-between font-medium text-[76px]'>
                <h2>GET</h2>
                <h2>YOUR</h2>
              </div>
              <p>Always available for freelance work, contact me and get your greate design</p>
              <h2 className='font-medium text-[76px]'>GREAT</h2>
              <h2 className='font-medium text-[76px] ml-32.75'>DESIGN</h2>
              <p className='w-95 mt-12 mb-26'>Hello, my name is Pattison and i am UX/UI designer and front-end developer, im working via developer 9 years and i know all about design</p>
              <ShowButton
                buttonWork='HIRE ME'
              />
              <div className='flex w-full justify-between mt-23'>
                <div className='flex gap-6.5 items-center'>
                  <h2 className='font-medium text-[74px]'>8</h2>
                  <p className='w-22.5'>Years Experience</p>
                </div>
                <div className='flex gap-6.5 items-center'>
                  <h2 className='font-medium text-[74px]'>5</h2>
                  <p className='w-22.5'>Themeforest Awards</p>
                </div>
                <div className='flex gap-6.5 items-center'>
                  <h2 className='font-medium text-[74px]'>60</h2>
                  <p className='w-22.5'>Projects Done</p>
                </div>
              </div>
            </div>
            <div>
              <img src={Grid} alt="Grid" className='w-293 absolute'/>
              <MySlider className='ml-7.5 mt-40'>
                  <img src={firstImage} alt="First Image"/>
                  <img src={firstImage} alt="First Image" />
                  <img src={firstImage} alt="First Image" />
                  <img src={firstImage} alt="First Image" />
                  <img src={firstImage} alt="First Image" />
              
              </MySlider>
            </div>
          </div>
        
    </div>
    
    
  )
}

export default Home