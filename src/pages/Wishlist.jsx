import React from "react";
import Header from "../components/Header";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleXmark, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link  } from "react-router-dom";
import { removeWishlistItem } from "../redux/slices/wishListSlice";
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const userWishlist=useSelector(state=>state.wishListReducer)
  const userCart=useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()

   const handleCart=(product)=>{
      const existingProduct = userCart?.find(item=>item.id==product.id)
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
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
      <Header />

      <div className="container py-5">
        {/* wishlist with content */}
     {
  userWishlist?.length > 0 ?
    <div className="row my-5">
      {userWishlist.map((product, index) => (
        <div className="col-md-3 mb-2" key={index}>
          <Card>
            <Card.Img
              height="250px"
              variant="top"
              src={product.thumbnail}
            />

            <Card.Body className="text-center">
              <Card.Title>{product.title}</Card.Title>

              <div className="d-flex justify-content-evenly my-1">
                <button onClick={() => dispatch(removeWishlistItem(product.id))}
                        className="btn text-danger fs-4">
                  <FontAwesomeIcon icon={faHeartCircleXmark} />
                </button>

                <button onClick={()=>handleCart(product)} className="btn text-success fs-4">
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  :
    <div className="d-flex justify-content-center align-items-center flex-column">
      <img style={{heigth:'80vh'}} src="https://tse3.mm.bing.net/th/id/OIP.l851RSspZ2iciCzkodPEHQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" className="w-25" />
      <h3>Wishlist is Empty</h3>
      <Link to="/" className="btn btn-primary">Add More</Link>
    </div>
}

      
      </div>
    </>
  );
}

export default Wishlist;
