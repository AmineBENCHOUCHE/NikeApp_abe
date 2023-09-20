import React from 'react'
import { star } from '../assets/icons'

const CustomerReviewCard = ({customerName, rating, imgURL, feedback}) => {
  return (
   
        <div className='flex flex-col justify-start items-start gap-4 mt-4 mb-8  max-container '>
            <div className='flex justify-start gap-4 items-center  sm:items-center sm:w-3/5 w-full max-container'>
                <img src={imgURL} alt="photo customer" width={80} height={80} className='rounded-full' />
                <p className=' text-left text-xl w-full'>{feedback}</p>
            </div>
            <div className='flex gap-5 justify-start  items-center sm:w-3/5 w-full max-container'>
                <img src={star} alt="rating"  width={24} height={24} className="color-red-500 "/>
                <p className='font-montserrat leading-normal text-slate-gray text-xl'>({rating})</p>
                <h4 className='font-bold text-2xl '>{customerName}</h4>
            </div>


        </div>

    )
        
      
}

export default CustomerReviewCard