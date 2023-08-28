import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { CartContext } from '../Context/addToCart/Context'
import { AppRoute } from '../../App'

function ItemPage() {
    const { _id } = useParams()
    const [singleitem, setSingleItem] = useState({})
    const [productQuantity, SetproductQuantitry] = useState(1)
    const [ratingstar, setRatingstar] = useState(0)
    const [comment, setComment] = useState("")

    const { cart_state, cart_dispatch } = useContext(CartContext)


    useEffect(() => {
        axios.get(`${AppRoute}api/itemById?_id=${_id}`)
        .then((json) => setSingleItem(json.data.item))
        .catch(err => console.log(err))
    },[])
    // console.log(singleitem._id)
    const ratingChanged = (newRating) => {
      setRatingstar(newRating)
  }

  const orderNow = (item) => {
    const payload = { ...item, productQuantity, 
    totalPrice:singleitem.Price*productQuantity }
    console.log(payload)
    cart_dispatch(
        {
            type: "Add_To_Cart",
            payload
               })

               Swal.fire({
                title: 'Successfully Added to Cart',
                text: 'Thanks for your Order',
                icon: 'success',
                confirmButtonText: 'Continue Order',
            })
}
  

  const submitReview = () => {
    const payload = {
        singleitem: singleitem,
        review: comment,
        rating: ratingstar
    }
    console.log(payload)

    Swal.fire({
      title: 'Successfully Submitted!',
      text: 'Thanks for Reviewing!',
      icon: 'success',
      confirmButtonText: 'Continue Order',
  })
  }
  return (
    <>
     <div className="container">
            <div className="row">
                <div className="col-md-6 my-5">
                  <div className='itemimage mt-2'> 
                  <img src={singleitem.thumbnail} alt="" srcSet="" className='img-fluid rounded' style={{width:'390px', height:'489px'}} /> 
                  </div>
                   

                </div>
                <div className="col-md-6 my-5 text_container ">
                  <div className='box'>
                    <h2 className='title' style={{color:'#b86e14'}}>{singleitem.ItemName} </h2>
                    <small style={{color:'black'}} className="text-center">{singleitem.description}</small>
                    <h4 style={{color:'black'}} >Price: {singleitem.  Price}</h4>
                    <h6 style={{color:'black'}}>Category: {singleitem.category}</h6>
                    <h6 style={{color:'black'}}>Restaurant: {singleitem.restuarent}</h6>
                   

                    <div className='quantity'><button style={{width:'35px', height:'35px'}} className=' mx-3 py-2 rounded align-item-center' disabled={productQuantity >1? false:true} onClick={()=>SetproductQuantitry(productQuantity-1)}>-</button>
        {productQuantity}
        <button style={{width:'35px',  height:'35px'}} className=' mx-3 py-2 my-2 rounded'  onClick={()=>SetproductQuantitry(productQuantity+1)}>+</button>
        </div>

                    <div className=' mt-2'><button className="w-50 " onClick={orderNow}
                    // onClick={() => orderNow(singleitem)} disabled={cart_state.cart.some(item => item._id === singleitem._id)}
                    >Add To Cart</button></div>
                     <h5 style={{color:'#b86e14'}} className='my-2' >Please Submit a Review</h5>
                    
                    <div style={{color:'black'}}>
                        Your Overall rating: <ReactStars
                         count={5}
                         size={24}
                         value={ratingstar}
                         onChange={ratingChanged}
                         color2={'##b86e14'} />
                      <div className="form-floating " style={{color:'black'}} > YOUR REVIEW*
            <textarea
                className="form-control mt-2 "
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: '10px' }}
                defaultValue={comment}
                onChange={(e) => setComment(e.target.value)}
            />
                
                        <div>
                            <button className=' mt-2 w-40' onClick={submitReview}>Submit review</button>
                        </div>
                    </div>
                         
                     
                        {/* <div className="justify-content-between align-items-center">
                            <div> */}
                                
                                   
                {/* </div>
            </div> */}
                    </div>
                </div>
                </div>
                
                

                    

        

                    <h5 style={{color:'#b86e14'}} className='mt-3'>Delivery details:</h5>
                    <p style={{color:'black'}}>Please note that your order will be deliever within 30 - 40 minutes.</p>

            </div>

        </div>
 </>
  )
}

export default ItemPage