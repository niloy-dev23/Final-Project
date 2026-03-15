import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const ShowButton = ({ buttonWork }) => {
  return (
    <div className='flex ml-80 gap-7 items-center mt-26'>
                <p>{buttonWork}</p>
                <button className='bg-[#B66449] p-9 rounded-[40px] cursor-pointer'><FaArrowRightLong className='text-[37px]'/></button>
    </div>
  )
}

export default ShowButton