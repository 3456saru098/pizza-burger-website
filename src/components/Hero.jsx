import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1650px] max-auto p-4'> 
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h[500px] bg-black/40 flex flex-col justify-center'>
             <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl font-bold'>The<span className='text-orange-500'>Best</span></h1>
             <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl font-bold'><span className='text-orange-500'>Food</span>Delivered</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover'src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
      </div>
    </div>
  )
}

export default Hero
