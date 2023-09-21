
import CustomerReviewCard from "../Components/CustomerReviewCard"
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <div className="padding-x flex flex-col items-center gap-20">
    <div className="flex flex-col gap-4" >
      <h2 className="max-container text-4xl font-palanquin font-bold ">What Our <span className=" bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-500 ">Customers</span> Say ?</h2>
      <p className="text-2xl text-slate-gray text-left md:text-center  max-container">Hear genuine stories from our satisfied customers about their exceptional experiences with us</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 max-container">
{reviews.map(review => (

<CustomerReviewCard  imgURL={review.imgURL} feedback={review.feedback} rating={review.rating} customerName={review.customerName} />
)
)}
    </div>
    </div>
    )
}

export default CustomerReviews