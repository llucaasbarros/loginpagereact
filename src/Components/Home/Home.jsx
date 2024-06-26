import React from 'react';
import Navbar from '../Navbar/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';
import praia1 from 'assets/praia1.jpg';
import praia2 from 'assets/praia2.jpg';
import praia3 from 'assets/praia3.jpg';

function Accordeon() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage src={praia1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={praia2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={praia3} alt="Third slide" />
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

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <Accordeon />
    </div>
  );
}

export default Home;
