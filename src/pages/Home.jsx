import React from 'react';
import Header from "../components/Header";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />

      <div className="container py-5">
        <div className="row my-5">

          {/* duplicate */}
          <div className="col-md-3 mb-2">
            {/* card - react bootstrap */}
            <Card>
              <Card.Img
                height="250px"
                variant="top"
                src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
              />
              <Card.Body className="text-center">
                <Card.Title>Title</Card.Title>
                <Link to="/products/id/view" className="btn btn-secondary">
                  View More..
                </Link>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
