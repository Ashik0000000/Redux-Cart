import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar style={{height:'55px'}} expand="lg" className="bg-info position-fixed w-100 ">
      <Container>
        <Navbar.Brand ><Link to={'/'} className='text-decoration-none text-light fw-bold'>  <FontAwesomeIcon icon={faTruckFast} />Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex align-items-md-center">
            <Nav>
                  <Link to={"/wishlist"} className="text-decoration-none text-light fw-bold"><FontAwesomeIcon icon={faHeart} className="  text-danger" />WishList</Link>
            </Nav>
              <Nav>
                  <Link to={"/cart"} className="text-decoration-none text-light fw-bold ms-md-5"><FontAwesomeIcon icon={faCartShopping} className="  text-success" />Cart</Link>
            </Nav>

           

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header