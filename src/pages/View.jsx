import React from 'react'
import Header from '../components/Header'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function View() {
  return (
    <>
    <Header/>
    <div className='container py-5'>
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <img className="img-fluid" src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="product" />
          <div className="d-flex justify-content-evenly mt-5">
            <button className="btn btn-primary">Add to Wishlist</button>
             <button className="btn btn-success">Add to Carrt</button>
          </div>
        </div>
        <div className="col-md-6">
          <h1>Title</h1>

            <h3 className="text-danger">$ price</h3>

            <h4>Brand : </h4>

            <h4>Category : </h4>

            <h4>Description : </h4>

            <h3 className="my-3">Client Reviews</h3>

            {/* duplicate div */}
            <div className="border rounded p-3 shadow">

              <p>
                <span className="fw-bolder">Username : </span>
                message
              </p>

              <p>
                Rating : number
                <FontAwesomeIcon icon={faStar} className="text-warning" />
              </p>

            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View