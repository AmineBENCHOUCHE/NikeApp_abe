import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import {shoes} from "../constants"
import StatisticCard from "../Components/StatisticCard"
import {AirJordan1, court} from "../assets/images"
import ShoeCard from "../Components/ShoeCard"
import { useState } from "react"

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(AirJordan1)

  
  return (

    <section id="home" className=" xl:padding-l w-full flex xl:flex-row flex-col min-h-screen max-container gap-10 ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max:xl:padding-x pt-28 ">
        <p className="text-red-500 text-xl font-montserrat">Our summer collections</p>
        <h1 className="mt-10 xl:text-8xl text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold font-palanquin">
         <span className="text-black   xl:rounded-full xl:whitespace-nowrap relative z-10 pr-10 tracking-wide">The New Arrival</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500 mt-3 inline-block">Jordan</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm z-10">Discover stylish Jordan arrivals, quality comfort, and innovation for your active life.</p>
        <div className="py-10">
           <Button label="Shop now" iconURL={arrowRight}/>
        </div>
        <div className="flex justify-start items-start w-full gap-16 mt-20">
           <StatisticCard value="1k+" label="Brands"/>
           <StatisticCard value="500+" label="Shops"/>
           <StatisticCard value="250k+" label="Customers"/>
        </div>
      </div>
      {/* Image on the right  */}
      <div className="relative flex-1 flex flex-col items-center justify-around xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center gap-10 rounded-l-full">
        <img src={bigShoeImage} alt="shoe collection" width={600} height={400} className="relative object-contain z-10 animate-bounce-short pt-20"/>
        <div className="absolute bottom-[2%] flex justify-between self-end px-10 gap-6 ">
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