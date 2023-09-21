
import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { photo1, photo2, photo3, } from "../assets/images"
const SpecialOffer = () => {
  return (
    <section className="padding-x  flex flex-col justify-wrap items-center max-container gap-10 max-xl:flex-col-reverse ">
        <p className="w-full bg-black p-5 text-white animate:bounce-short text-center font-bold text-3xl rounded-xl">10% OFF FOR A LIMITED TIME ONLY</p>
      <div className=" relative grid grid-cols-2 gap-5 ">
        <img src={photo1} alt="" className="col-span-1 rounded-xl hover:rounded-full transition-all transform -300"/>
        <img src={photo2} alt="" className="rounded-xl h-full hover:rounded-full"/>
        <img src={photo3} alt=""  className="col-span-2 rounded-xl w-full hover:rounded-full"
        />
      </div>
    
      <div className="flex flex-col justify-start">
        <h2 className="text-4xl font-palanquin font-bold "><span className=" bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500 ">Special</span>  Offer</h2>
        <p className="info-text w-full mt-10 break-words">Unlock exclusive savings today at Jordan! For a limited time, enjoy our special offer with up to 10% off select styles. Don't miss out on the chance to upgrade your athletic gear and footwear for less</p>
        <p className="info-text mt-5 break-words">Take advantage of our special offer now and get up to 20% off on top-rated sneakers. Elevate your sportswear collection while the deal lasts!</p>
        <div className="flex mt-10 gap-10 ">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more" 
            backgroundColor="#fff"
            textColor="text-slate-gray" />
        </div>
      </div>

    </section>
  )
}

export default SpecialOffer