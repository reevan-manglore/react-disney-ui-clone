import React from 'react'

function CarouselItem({item}) {
  return (
    <div
   
    className='w-4/5  h-1/2 md:h-auto shrink-0 shadow-xl  shadow-gray-800 '
    >
        <img src={item} className = "w-full  h-36  md:h-auto  border-4 border-slate-800 object-cover"/>
    </div>
  )
}

export default CarouselItem