import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { addToWishlist } from '../redux/slices/wishListSlice';
import { addToCart } from '../redux/slices/cartSlice';



function View() {
  const userWishlist=useSelector(state=>state.wishListReducer)
  const dispatch=useDispatch()
  const { id } = useParams()
const productId = Number(id)
const userCart=useSelector(state=>state.cartReducer)

  //state to store product to view
  const[product,setProduct]=useState()
  useEffect(()=>{
    if(sessionStorage.getItem("product")){
      const allProducts=JSON.parse(sessionStorage.getItem("product"))
      const foundProduct = allProducts.find(item=>item.id==id)
      setProduct(foundProduct)
      console.log("Loaded product:", foundProduct)

    }
  },[id])

  const handleWishlist=()=>{
    const existingProduct = userWishlist?.find(item=>item.id==id)
    if(existingProduct){
      
      Swal.fire({
  title: 'Sorry!',
  text: 'product already in wishlist...',
  icon: 'error',
  confirmButtonText: 'Ok'
})
    }else{
      //add product to wishlist in redux store- dispatch action
      dispatch(addToWishlist(product))
    }
  }
  const handlecart=()=>{
    const existingProduct = userCart?.find(item=>item.id==id)
    dispatch(addToCart(product))
 Swal.fire({
    title: 'Completed..',
    text: existingProduct 
        ? `Quantity of ${product.title}, is updated successfully`
        : 'Product added to your cart ..',
    icon: 'success',
    confirmButtonText: 'Ok'
})

  }
  return (
    <>
    <Header/>
    <div className='container py-5'>
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img className="img-fluid" src={product?.thumbnail} alt="product" />
          <div className="d-flex justify-content-evenly mt-5">  
            <button onClick={handleWishlist} className="btn btn-primary">Add to Wishlist</button>
             <button onClick={handlecart} className="btn btn-success">Add to Cart</button>
          </div>
        </div>
        <div className="col-md-6 mt-5 mt-md-0">
          <h1>Title</h1>  

            <h3 className="text-danger">${product?.price}</h3>

            <h4> Brand:{product?.brand} </h4>

            <h4>Category : {product?.category} </h4>

            <h4>Description : {product?.description}</h4>

            <h3 className="my-3">Client Reviews</h3>

            {/* duplicate div */}
           {
              product?.reviews?.length > 0 ?
                product?.reviews?.map((item, index) => (
                  <div className="border rounded p-3 shadow my-2" key={index}>
                    <p>
                      <span className="fw-bolder">{item?.reviewerName} : </span>
                      {item?.comment}
                    </p>
                    <p>
                      Rating : {item?.rating}
                      <FontAwesomeIcon icon={faStar} className="text-warning" />
                    </p>
                  </div>
                ))
                    :
                    <div>No Client reviews are available</div>
                }

        </div>
      </div>
    </div>
    </>
  )
}

export default View