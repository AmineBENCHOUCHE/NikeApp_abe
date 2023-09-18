import React from 'react'
import { useState } from 'react'
import { IconBasketBall } from '../assets/images';

const Button = ({label, iconURL}) => {
  const [iconImage, setIconImage] = useState(iconURL);
  const handleClickBtn = () => {

   setIconImage(IconBasketBall);
   

}
  return (
    <button className='flex justify-center items-center gap-2 font-montserrat border border-red-500 text-lg leading-none px-7 py-4 rounded-full text-white bg-red-500' onClick={handleClickBtn}>
        {label}
        <img src={iconImage} alt="arrow-right" className='w-5 h-5 rounded-full ml-2'/>
    </button>
  )
}

export default Button