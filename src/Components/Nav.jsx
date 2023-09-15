import {headerLogo} from "../assets/images"
import{hamburger} from "../assets/icons"
import { navLinks } from "../constants"
import { useState } from "react"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


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
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between max-container">
            <a href="/">
                <img src={headerLogo} alt="header logo" width={130} height={29} />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {links()}
            </ul>
            <div className="hidden max-lg:block">
              <div className="flex flex-col justify-center items-end">
                {
                  toggleMenu? 
                  <RiCloseLine alt="close menu" width={27} height={27} onClick={() => setToggleMenu(false)} />:
                  <RiMenu3Line alt="hamburger menu" width={27} height={27} onClick={() => setToggleMenu(true)} />
                }
                {
                  toggleMenu && (
                   <div className="flex flex-col justify-end items-end list-none relative mt-5 mr-5">
                    {links()}
                   </div>
                  )
                  
                }
               
              </div>
            </div>
        </nav>
       
       
         
    </header>
  )
}

export default Nav