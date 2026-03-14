import React from 'react'

const Sidebar = ({name, version}) => {
  return (
    <div>
        <div className='flex justify-between w-235 text-[38px] absolute -left-108.25 top-132.25 text-primary border-b border-b-[#66645D] py-4 px-9 h-20.5 -rotate-90 -z-5'>
          <h1>{name}</h1>
          <p>{version}</p>
      </div>
    </div>
    
  )
}

export default Sidebar