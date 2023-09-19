import Button from "../Components/Button"
import { JordanSVG } from "../assets/images"
import { AirJordan3Balvin } from "../assets/images"
const SuperQuality = () => {
  return (
    <section className="padding-x max-container flex justify-between items-start">
      <div className="flex flex-col">
        <h2 className="text-4xl font-montserrat font-bold lg:max-w-lg">Shoes Approved by his <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500 ">A  <img src={JordanSVG} alt="logo" width={40} height={40} className="inline-block" /> R N E S S </span></h2>
        <p className="info-text lg:max-w-lg mt-4 mb-4  text-slate-gray">Since 1984, Jordan shoe was produced for basketball player Michael Jordan during his time with the Chicago Bulls and released to the public on April 1, 1985. Jordan shoes are renowned for their iconic style and exceptional engineering. They prioritize performance and comfort, with features like Air-Sole units and premium materials for durability and fit. These sneakers blend style and substance, making them popular among athletes and fashion enthusiasts alike</p>
        <p className="text-xl w-full mt-4 mb-4 leading-normal font-semibold">
          Check out the Upcoming Collab Air Jordan III x J Balvin <br />(23th September 2023)
        </p>
        <div className="mt-11"><Button label="View Details"  /></div>
      </div>
      <div className="flex flex-1 justify-end items-center">
        <img src={AirJordan3Balvin} alt="shoe air jordan 3" width={570} height={570} className="aspect-square rounded-full" /></div>
    </section>
  )
}

export default SuperQuality