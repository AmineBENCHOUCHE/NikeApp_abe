import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full shadow-md shadow-red-300  p-4 rounded-lg '>
        <img src={imgURL} alt={name} className='w-full h-auto ' />
        <div className='mt-8 flex flex-col justify-start gap-2.5'>
            <div className='flex gap-2'>
                <img src={star} alt="rating"  width={24} height={24} className="color-red-500 "/>
                <p className='font-montserrat leading-normal text-slate-gray text-xl'>(4.8)</p>
            </div>
            <h3 className='text-2xl mt-2 leading-normal font-semibold font-palanquin '>{name}</h3>
            <p className=' relative  mt-2 font-montserrat font-semibold text-2xl leading-normal text-red-500 '>{price}</p>
        </div>

    </div>
  )
}

export default PopularProductCard