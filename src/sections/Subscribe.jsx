import Button from "../Components/Button"


const Subscribe = () => {
  return (
    <section id="contact-us" className="flex md:flex-col justify-center items-center gap-10 max-container max-lg:flex-col">
      <h3 className="text-3xl md:text-4xl font-bold">Sign up for <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500"> Updates </span>& Newsletter</h3>
      <div className=" flex border-2 border-gray-300 rounded-full p-2">
        <input type="text" placeholder="subscribe@jordan.com"  className="px-4 text-slate-gray rounded-full"/>
        <div className=" mx-sm:w-full"><Button label="Sign Up" fullWidth className="absolute " /></div>
      </div>
    </section>
  )
}

export default Subscribe