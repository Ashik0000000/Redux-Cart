import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTruckFast,
  faArrowRight,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div
      style={{ height: '350px' }}
      className="bg-info d-flex justify-content-center align-items-center flex-column text-light w-100"
    >

      {/* --------------- INTEGRATED START CODE --------------- */}
      <div className="d-flex">
        
      </div>
      {/* ------------------------------------------------------ */}

      <div className="container mt-3">
        <div className="d-flex justify-content-between">

          {/* LEFT COLUMN */}
          <div style={{ width: '400px' }} className="intro">
            <div style={{ width: '300px' }} className="intro">
          <h3>
            <FontAwesomeIcon icon={faTruckFast} /> Daily Cart
          </h3>
        </div>
            <p>
              Designed and built with all the love in the world by the Luminar
              team with the help of our contributors.
            </p>
            <p>Code licensed Luminar, docs CC BY 3.0.</p>
            <p>Currently v5.3.2.</p>
          </div>

          {/* LINKS COLUMN */}
          <div className="links d-flex flex-column">
            <h3>Links</h3>
            <Link to="/" className="text-decoration-none text-light">Home</Link>
            <Link to="/wishlist" className="text-decoration-none text-light">Wishlist</Link>
            <Link to="/cart" className="text-decoration-none text-light">Cart</Link>
          </div>

          {/* GUIDES COLUMN */}
          <div className="links d-flex flex-column">
            <h3>Guides</h3>

            <a href="https://reactjs.org/" target="_blank" className="text-light text-decoration-none">React</a>
            <a href="https://react-bootstrap.github.io/" target="_blank" className="text-light text-decoration-none">React Bootstrap</a>
            <a href="https://react-redux.js.org/" target="_blank" className="text-light text-decoration-none">React Redux</a>
            <a href="https://reactrouter.com/" target="_blank" className="text-light text-decoration-none">React Router Dom</a>
          </div>

          {/* CONTACT COLUMN */}
          <div className="links d-flex flex-column">
            <h3>Contact us</h3>

            <div className="d-flex">
              <input
                type="text"
                placeholder="Email Here"
                className="form-control"
              />
              <button className="btn">
                <FontAwesomeIcon icon={faArrowRight} className="text-light" />
              </button>
            </div>

            <div className="mt-5 d-flex justify-content-between">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faEnvelope} />
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </div>

        </div>

        <p className="fw-bolder mt-4 text-center">
          Copyright © July 2025 Batch, Daily Cart. Built with ❤️ React Redux.
        </p>
      </div>
    </div>
  )
}

export default Footer
