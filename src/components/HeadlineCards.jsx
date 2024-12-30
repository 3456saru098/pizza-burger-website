import React from 'react'

const Headlinecards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards */}
        <div className='rounded-xl relative'>
         {/* Overlay*/}
         <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'> Sun's Out,BoGo's Out</p>
            <p className='px-2'> Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute buttom-4 '>Order Now</button>
         </div>
         <img className='max-h-[160px] md;max-h-[200px] w-full object-cover rounded-xl'
         src="https://plus.unsplash.com/premium_photo-1699612395049-567bd024d666?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" 
         
         />
        </div>
    {/* Cards */}
    <div className='rounded-xl relative'>
         {/* Overlay*/}
         <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'> New Restruants</p>
            <p className='px-2'> Added Daily</p>
            <button className='border-white bg-white text-black mx-2 absolute buttom-4 '>Order Now</button>
         </div>
         <img className='max-h-[160px] md;max-h-[200px] w-full object-cover rounded-xl'
         src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" 
         
         />
       
        </div>
   {/* Cards */}
   <div className='rounded-xl relative'>
         {/* Overlay*/}
         <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'> We Deliver Desserts Too</p>
            <p className='px-2'> Tasty Treats</p>
            <button className='border-white bg-white text-black mx-2 absolute buttom-4 '>Order Now</button>
         </div>
         <img className='max-h-[160px] md;max-h-[200px] w-full object-cover rounded-xl'
         src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" 
         
         />
        </div>
    </div>
  )
}

export default Headlinecards
