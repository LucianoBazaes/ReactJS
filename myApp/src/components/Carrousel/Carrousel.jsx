import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carrousel = () => {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="https://store.nba.com/content/ws/468949/3146_NBA_TLP_Aspot_101322_CELT_Desk.jpg"       
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://www.celticsstore.com/content/ws/all/2b5ea6da-80e0-4a74-b5b7-be637560d1bf__1600X815.jpg.js/800x400?text=Second slide&bg=282c34"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.celticsstore.com/content/ws/all/3c465b8e-0501-4482-aceb-85f3897a2ce2__1600X440.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}

export default Carrousel