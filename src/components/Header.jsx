import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';

function Header({insideHome}) {
  const userWishList = useSelector(state => state.wishListReducer);
  const userCart = useSelector(state => state.cartReducer);
  const dispatch=useDispatch()

  return (
    <Navbar style={{ height: '55px' }} expand="lg" className="bg-info position-fixed w-100 z-1">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-light fw-bold">
            <FontAwesomeIcon icon={faTruckFast} /> Daily Cart
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex align-items-md-center">

            {/* Search Input - forced white background */}
            {insideHome&&
            <Nav.Item className="me-lg-2">
  <input onChange={e=>dispatch(searchProduct(e.target.value))}
    type="text"
    className="form-control bg-white text-dark rounded-5 px-3"
    style={{
      border: "1px solid #ccc",
      height: "38px",
      marginTop: "5px",
      marginBottom: "5px",
      width: "220px"
    }}
    placeholder="Search by Product"
  />
</Nav.Item>
}

            {/* Wishlist */}
            <Nav>
              <Link to="/wishlist" className="text-decoration-none text-light fw-bold d-flex align-items-center ms-md-3">
                <FontAwesomeIcon icon={faHeart} className="text-danger me-1" /> 
                Wishlist 
                <Badge pill bg="dark" className="ms-1">{userWishList?.length}</Badge>
              </Link>
            </Nav>

            {/* Cart */}
            <Nav>
              <Link to="/cart" className="text-decoration-none text-light fw-bold d-flex align-items-center ms-md-4">
                <FontAwesomeIcon icon={faCartShopping} className="text-success me-1" /> 
                Cart 
                <Badge pill bg="dark" className="ms-1">{userCart?.length}</Badge>
              </Link>
            </Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
