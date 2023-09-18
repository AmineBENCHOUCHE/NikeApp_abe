import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import {shoes} from "../constants"
import StatisticCard from "../Components/StatisticCard"
import {AirJordan1} from "../assets/images"
import ShoeCard from "../Components/ShoeCard"
import { useState, useEffect } from "react"

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(AirJordan1)

  
  return (
    <section id="home" className="mt-40 flex xl:flex-row flex-col justify-between items-start min-h-screen max-container gap-10  w-full">
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-18">
        <p className="text-red-500 text-xl font-montserrat">Our summer collections</p>
        <h1 className="xl:mt-10 mt-4 xl:text-8xl text-4xl max-sm:text-[72px] max-sm:leaading-[82] font-bold font-palanquin">
        <span className="text-black xl:bg-white  xl:rounded-full xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span> <br />
         <span className="text-red-500 mt-3 inline-block">Jordan</span> Shoes</h1>
        <p className="sm: max-w-sm font-montserrat text-slate-gray text-lg leading-8 mt-6 xl:mb-14 mb-2">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <div className="py-10">
          <Button label="Shop now" iconURL={arrowRight}/>
        </div>
        <div className="flex xl:gap-16 gap-12 mt-0">
          <StatisticCard value="1k+" label="Brands"/>
          <StatisticCard value="500+" label="Shops"/>
          <StatisticCard value="250k+" label="Customers"/>
        </div>
      </div>

      <div className="absolute top-0 right-32 flex-1 flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-center bg-gradient-to-r from-white to-red-200 
       ">
        <img  className="object-contain mt-52 z-10 px-5 animate-bounce-short" src={bigShoeImage} alt="Air Jordan 1" width={600} height={490} />
        <div className="flex sm:gap-6 gap-4 absolute lg:bottom-[5%] xl:bottom-[20%] xl:right-[20%] sm:left-[10%]">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => setBigShoeImage(shoe)} />
            </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Hero