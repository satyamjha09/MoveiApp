import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const HorizontalScollCard = ({data = [] , heading, trending, media_type}) => {

    const containerRef = useRef()

    const handleNext = () => {
        containerRef.current.scrollLeft += 300
    }

    const handleprevious = () => {
        containerRef.current.scrollLeft -= 300
    }


  return (
    <div className='container mx-auto px-3 my-10'>

    <h2 className='text-xl lg:text-2xl font-bold mb-3  text-white'> 
      {heading} 
    </h2>

    <div className=' relative'>
        <div ref={containerRef} className='grid grid-flow-col grid-cols-[repeat(auto-fit,230px)] gap-6 overflow-hidden relative z-10 scrolbar-none'>
            {
                data.map((data, index) => {
                return (
                    <Card  key={data.id+"heading"+index} data={data} index={index+1} trending={trending} media_type={media_type} />
                )
                })

            }

        </div>

        <div className='absolute top-0 hidden lg:flex justify-between w-full h-full items-center'> 

            <button onClick={handleprevious} className='bg-white p-1 text-black rounded -ml-2 z-10 '>
                <FaAngleLeft/>
            </button>

            <button onClick={handleNext} className='bg-white p-1 text-black rounded -ml-2 z-10 scroll-smooth transition-all '>
                <FaAngleRight/>
            </button>

        </div>

    </div>

    

    

    </div>
  )
}

export default HorizontalScollCard