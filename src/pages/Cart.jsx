import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeCartItem ,incrementCartItem,decrementCartItem,emptyCart} from '../redux/slices/cartSlice'
import Swal from 'sweetalert2'




function Cart() {
  const userCart= useSelector(state=>state.cartReducer)
  const[sum,setSum] = useState(0)
  const dispatch= useDispatch()
  const navigate=useNavigate()

  useEffect(()=>{
    setSum(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
  },[userCart])

  const handleDecrementcart=(product)=>{
   if(product.quantity>1){
    dispatch(decrementCartItem(product))

   }
   else{
    dispatch(removeCartItem(product.id))
   }
  }
  const checkout = ()=>{
    dispatch(emptyCart())
    navigate('/')
 Swal.fire({
  title:'order placed',
  text:"ThankYou for Shopping with us",
  icon:"success",
  confirmButtonText:"Ok"

 })
  }
  return (
    <>
    <Header/>
    <div className="container py-5">
    {
      userCart?.length>0?
         <div className="my-5">
        <div className="text-danger fw-bold">Cart Summary</div>
        <div className="row mt-5">
          <div className="col-md-8 border rounded p-5">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
                </thead>
                <tbody>
                 {
                  userCart?.map((product,index)=>(
                     <tr>
                    <td>{index+1}</td>
                    <td>{product?.title}</td>
                    <td>
                      <img width={'50px'}  height={'50px'}src={product?.thumbnail} alt="product" />
                    </td>
                    <td>
                      <div className="d-flex">
                        <button onClick={()=>handleDecrementcart(product)} className="btn fs-3 fw-bold">-</button>
                        <input style={{width:'50px'}} value={product?.quantity} className='form-control' type="text" readOnly/>
                         <button onClick={()=>dispatch(incrementCartItem(product))} className="btn fs-3 fw-bold">+</button>
                      </div>
                    </td>
                    <td>{product?.totalPrice}</td>
                    <td>
                      <button onClick={() => dispatch(removeCartItem(product?.id))}
                       className="btn btn-danger"><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                    </td>
                  </tr>
                  ))
                 }
                </tbody>
            </table>
            <div className="float-end my-5">
              <button onClick={()=>dispatch(emptyCart())} className="btn btn-danger me-3">Empty Cart
              </button>
              <Link to={'/'} className="btn btn-primary">Shop More</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border rounded p-5">
              <h3 className="fw-bold">Total Amount<span className="text-danger">${sum}</span></h3>
              <div className="d-grid mt-2" >
                <button onClick={checkout
                  
                } className="btn btn-primary">CHECK OUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>:
       <div className="d-flex justify-content-center align-items-center flex-column">
      <img style={{heigth:'80vh'}} src="https://tse3.mm.bing.net/th/id/OIP.l851RSspZ2iciCzkodPEHQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className="w-25" />
      <h3>Wishlist is Empty</h3>
      <Link to="/" className="btn btn-primary">Cart is empty</Link>
    </div>
    }
    </div>
    </>
  )
}

export default Cart