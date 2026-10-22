import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './Pages.css';

const Home = () => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop',
      title: 'Ближе к мечте — вместе с нами!',
      subtitle: 'Открывай мир, путешествуй с комфортом, летай без границ.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop',
      title: 'Ваше идеальное путешествие',
      subtitle: 'Лучшие направления и выгодные предложения только у нас.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?q=80&w=2070&auto=format&fit=crop',
      title: 'Покупайте самолеты у нас',
      subtitle: 'Надежность, проверенная временем и небом.',
    }
  ];

  return (
    <div className="home-page">
      <Container fluid className="p-0">
        <Carousel fade>
          {slides.map((slide) => (
            <Carousel.Item key={slide.id} className="carousel-item-custom">
              <img
                className="d-block w-100 carousel-img"
                src={slide.image}
                alt={slide.title}
              />
              <div className="carousel-overlay"></div>
              
              <Carousel.Caption className="text-start slide-caption">
                <h1 className="display-4 fw-bold">{slide.title}</h1>
                <p className="fs-5 mb-4">{slide.subtitle}</p>
                <button className="btn-skyway-orange btn-lg rounded-pill px-4">Найти рейс &rarr;</button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Container className="my-5 py-4 text-center">
        <Row>
          <Col md={3} sm={6} className="mb-4">
            <div className="feature-icon-wrapper">
              <img src="/images/plane.png" alt="Удобные рейсы" width="55" height="55" />
            </div>
            <h5 className="fw-bold">Удобные рейсы</h5>
            <p className="text-muted small">Более 1000 направлений по всему миру</p>
          </Col>
          
          <Col md={3} sm={6} className="mb-4">
            <div className="feature-icon-wrapper">
              <img src="/images/shield.png" alt="Надежность" width="55" height="55" />
            </div>
            <h5 className="fw-bold">Надежность</h5>
            <p className="text-muted small">Проверенные авиакомпании и безопасные перелеты</p>
          </Col>
          
          <Col md={3} sm={6} className="mb-4">
            <div className="feature-icon-wrapper">
              <img src="/images/suitcase.png" alt="Выгодные цены" width="55" height="55" />
            </div>
            <h5 className="fw-bold">Выгодные цены</h5>
            <p className="text-muted small">Лучшие предложения для путешествий</p>
          </Col>
          
          <Col md={3} sm={6} className="mb-4">
            <div className="feature-icon-wrapper">
              <img src="/images/support.png" alt="Поддержка 24/7" width="55" height="55" />
            </div>
            <h5 className="fw-bold">Поддержка 24/7</h5>
            <p className="text-muted small">Мы всегда рядом, чтобы помочь</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;