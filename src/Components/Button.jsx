import React from 'react'
import { useState } from 'react'
import { IconBasketBall } from '../assets/images';

const Button = ({label, iconURL, backgroundColor, textColor, fullWidth}) => {
  const [iconImage, setIconImage] = useState(iconURL);
  const handleClickBtn = () => {

   setIconImage(IconBasketBall);
   

}
  return (
    <button 
      className={`flex justify-center items-center gap-2 font-montserrat hover:bg-red-400 border-2 border-red-300 text-lg leading-none px-7 py-4 rounded-full
                  ${ 
                    backgroundColor? 
                    `${backgroundColor} ${textColor}` :
                     "bg-red-500 text-white " 
                  }
                  ${
                    fullWidth && 'w-full'
                  }
                }
                `}
     onClick={handleClickBtn}>
        {label}
        {iconURL &&
        <img src={iconImage} alt="arrow-right" className='w-5 h-5 rounded-full ml-2'/>
      }
    </button>
  )
}

export default Button