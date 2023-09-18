import {JordanSVG} from "../assets/images"
import { navLinks } from "../constants"
import { useState } from "react"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import React from 'react';
import {IconBasketBall} from "../assets/images";



const links =  () => (
    <>
      {
        navLinks.map((item) => 
          <li key={item.label}>
            <a href={item.href} className="font_montserrat leading-normal text-lg text-slate-gray">{item.label}</a>
          </li>
        )
      }
    </>
  )
  
  const Nav = () => {
   const [toggleMenu, setToggleMenu] = useState(false);
   return (
    <header className=" xl:padding-l padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-start max-container">
            <a href="/">
              <div className="flex justify-center items-center">
                <p className=" text-red-600 text-[35px] font-bold">JORDAN</p>
                <img src={JordanSVG} alt="header logo" width={50} height={5} className=" absolute" />
              </div>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {links()}
            </ul>
            <div className="hidden max-lg:block">
              <div className="flex flex-col justify-center items-end">
                {toggleMenu ? 
                  // <RiMenu3Line alt="hamburger menu" width={27} height={27} onClick={() => setToggleMenu(true)} />:
                  <RiCloseLine alt="close menu" width={27} height={27} onClick={() => setToggleMenu(false)} />:
                  <img className="hover:animate-bounce" src={IconBasketBall} width={40} height={40} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                  <div className="flex flex-col justify-end items-end list-none relative mt-5 mr-5">
                    {links()}
                  </div>
                )}
            </div>
          </div>

        </nav>
       
       
         
    </header>
  )
}

export default Nav