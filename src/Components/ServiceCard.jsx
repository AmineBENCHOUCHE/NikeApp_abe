import { delay, motion } from "framer-motion"

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
   <motion.div 
      animate={{ x:0, y:200, scale:1}}
      initial={{scale:0, y:-100, opacity:0}} 
      transition={{ ease: "easeOut", duration: 1.5 }}
      whileInView={{x:0, y:0, scale:1, opacity:1}}
      viewport={{once:true}}
      className="flex-1 flex flex-col sm:w-[350px] sm:mn-w-[350px] items-start rounded-[20px] shadow-3xl w-full px-10 py-16">
       <div className="w-11 h-11 flex  bg-red-500 justify-center bg-center bg-cover rounded-full items-center"><img src={imgURL} alt="icon" width={24} height={24} /></div>
       <h3 className='font-bold font-palanquin text-3xl mt-5 leading-normal'>{label}</h3>
       <p className='info-text mt-4 break-words leading-normal font-montserrat'>{subtext}</p>
   </motion.div>
  )
}

export default ServiceCard