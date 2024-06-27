import React from 'react';
import Navbar from "../Navbar/Navbar";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/praia1.jpg"
            alt="Primeira imagem"
          />
          <Carousel.Caption>
            <h3>Primeira Imagem</h3>
            <p>Descrição da primeira imagem.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/praia2.jpg"
            alt="Segunda imagem"
          />
          <Carousel.Caption>
            <h3>Segunda Imagem</h3>
            <p>Descrição da segunda imagem.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/praia3.jpg"
            alt="Terceira imagem"
          />
          <Carousel.Caption>
            <h3>Terceira Imagem</h3>
            <p>Descrição da terceira imagem.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
