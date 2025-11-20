import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div
      style={{ height: '80vh' }}
      className='d-flex justify-content-center align-items-center flex-column'
    >
      <h1 className="fw-bolder">404!</h1>

      <img
        width={'25%'}
        src="https://i.pinimg.com/originals/a3/59/56/a35956ec9f42082d3eeee4ba1b506060.gif"
        alt="page not found"
      />

      <h4>Look Like You're Lost</h4>
      <p>The page you are looking for is not available</p>

      <Link to='/' className='btn btn-secondary'>
        Back to Home
      </Link>
    </div>
  )
}

export default Pnf
