const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {
    const handleClick = () => {
        if(bigShoeImage !== imgURL.bigShoe) {

            changeBigShoeImage(imgURL.bigShoe);

        } 

    }
    return (
    <div className= 
            {`border-2 rounded-xl object-contain bg-white hover:scale-125 hover:border-red-100 p-2 cursor-pointer max-sm:flex-1 mb-5 mt-5 shadow-xl z-20  
             ${bigShoeImage === imgURL?"boder-red-500":"border-transparent"}`
            }
          onClick={handleClick}>
            <div className='flex justify-center items-center bg-cover bg-center z-10 object-fill'>
                <img src={imgURL.bigShoe} alt="shoe collection" width={127}  height={103} className=' object-contain z-10' />
                
            </div>
    </div>
  )
}

export default ShoeCard