const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {
    const handleClick = () => {
        if(bigShoeImage !== imgURL.bigShoe) {

            changeBigShoeImage(imgURL.bigShoe)
        } 

    }
    return (
    <div className= 
            {`border-2 rounded-xl object-contain bg-white hover:scale-125 hover:border-red-100 p-2 cursor-pointer max-sm:flex-1 drop-shadow
             ${bigShoeImage === imgURL?"boder-red-500":"border-transparent"}`
            }
          onClick={handleClick}>
            <div className='flex justify-center items-center bg-cover bg-center '>
                <img src={imgURL.bigShoe} alt="shoe collection" width={127}  height={103} className='object-contain' />
            </div>
    </div>
  )
}

export default ShoeCard