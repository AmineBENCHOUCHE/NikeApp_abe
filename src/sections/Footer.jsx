import { JordanSVG } from "../assets/images"
import { socialMedia, footerLinks } from "../constants"
const Footer = () => {
  return (
    <footer className="max-container w-full  justify-start items-start">
      <div className="flex-col justify-between items-center gap-5 flex-wrap max-lg:flex-col max-lg:items-start">
        <div className="flex flex-col justify-between">
            <a href="/" className=" flex w-1/4 justify-center items-center  bg-white p-3 rounded-full ">
              <p className=" text-red-600 text-[25px] font-bold">JORDAN</p>
              <img src={JordanSVG} alt="header logo" width={40} height={44} className="" />
            </a>
        </div>
        <p className="mt-6 text-base leading-normal font-montserrat text-white-400 sm:max-w-sm">
          Get shoes ready for the new term at your nearest Jordanstore. Find Your perfect size in Store. Get Rewards
        </p>
        
        <div className="flex gap-5 items-center mt-4">
          {socialMedia.map(icon => (
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <img src={icon.src} alt="icon.alt" width={24} height={24} />
            </div>
          ))
          }

        </div>
      </div>
      <div className=" flex flex-1 justify-between lg-gap-10 gap-20 flex-wrap mt-8">
          {footerLinks.map((section) => (
            <div key={section}>
             <h4 className="font-montserrat text-2xl leading-normal font-medium">{section.title}</h4>
             <ul>
              {section.links.map(link => (
                <li className="text-white-400 font-montserrat leading-normal mt-3 hover:text-slate-gray">{link.name}</li>
              ))}
             </ul>
            </div>
      
          )) }

        </div>

    </footer>
  )
}

export default Footer