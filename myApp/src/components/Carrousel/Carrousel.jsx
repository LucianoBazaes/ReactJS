import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import './carrousel.css'

const Carrousel = () => {
  return (
    <Carousel className='carrousel'>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://store.nba.com/content/ws/468949/3146_NBA_TLP_Aspot_101322_CELT_Desk.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://global.nbastore.com/content/ws/427232/a_spot_celtics_eng.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
);
}

export default Carrousel