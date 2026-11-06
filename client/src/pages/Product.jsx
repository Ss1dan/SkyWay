import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/products';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === Number(id));
  const [mainImg, setMainImg] = useState(product?.image);

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2>Товар не найден</h2>
        <Button as={Link} to="/catalog" className="btn-orange mt-3 rounded-pill">
          Вернуться в каталог
        </Button>
      </Container>
    );
  }

  const mockThumbs = [
    product.image,
    'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=500&auto=format&fit=crop'
  ];

  return (
    <div className="bg-light pb-5">
      <div className="product-hero mb-4">
        <Container>
          <h1 className="display-4 fw-bold mb-2">{product.name}</h1>
          <p className="fs-5 mb-0">Надёжный и популярный самолёт для комфортных путешествий по всему миру.</p>
        </Container>
      </div>

      <Container>
        <Row className="mb-4">
          <Col lg={7} className="mb-4 mb-lg-0">
            <div className="position-relative mb-3">
              <img src={mainImg} alt={product.name} className="main-product-img" />
              <button className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-3 rounded-circle" style={{opacity: 0.6}}>‹</button>
              <button className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-3 rounded-circle" style={{opacity: 0.6}}>›</button>
            </div>
            <Row className="g-2">
              {mockThumbs.map((thumb, idx) => (
                <Col key={idx} xs={3}>
                  <img 
                    src={thumb} 
                    alt="thumb" 
                    className={`thumb-img ${mainImg === thumb ? 'active' : ''}`} 
                    onClick={() => setMainImg(thumb)}
                  />
                </Col>
              ))}
            </Row>
          </Col>
          
          <Col lg={5}>
            <div className="product-info-card">
              <h1 className="title-large mb-1">{product.name}</h1>
              <div className="d-flex align-items-center mb-3">
                <span className="text-warning me-2">★★★★☆</span>
                <span className="text-muted small">4.8 (248 отзывов)</span>
              </div>

              <h2 className="price-large mb-4">от {product.price.toLocaleString()} ₽</h2>

              <Button className="btn-orange w-100 rounded-pill py-3 fw-bold fs-5 mb-3 d-flex align-items-center justify-content-center gap-2">
                <img src="/images/cart_white.svg" alt="cart" width="24" height="24" style={{filter: 'brightness(0) invert(1)'}} /> 
                В корзину
              </Button>

              <div className="mb-4">
                <span className="badge bg-success bg-opacity-25 text-success px-3 py-2 rounded-pill">
                  ✓ В наличии
                </span>
              </div>

              {/* ЗАМЕНИЛИ ЭМОДЗИ В СПИСКЕ НА КАРТИНКИ */}
              <ul className="specs-list">
                <li className="d-flex align-items-center">
                  <img src="/images/calendar.png" alt="year" className="spec-icon" /> 
                  <span className="flex-grow-1">Год производства</span>
                  <span>{product.year}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/users.png" alt="cap" className="spec-icon" /> 
                  <span className="flex-grow-1">Вместимость</span>
                  <span>{product.capacity}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/location.png" alt="range" className="spec-icon" /> 
                  <span className="flex-grow-1">Дальность полёта</span>
                  <span>{product.range}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/speed.png" alt="speed" className="spec-icon" /> 
                  <span className="flex-grow-1">Крейсерская скорость</span>
                  <span>{product.speed}</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <div className="bg-white p-4 rounded-3 shadow-sm mb-4">
          <h4 className="fw-bold mb-4">Характеристики</h4>
          <Row>
            <Col md={6}>
              <ul className="specs-list">
                <li className="d-flex align-items-center">
                  <img src="/images/plane1.png" alt="type" className="spec-icon" /> 
                  <span className="flex-grow-1">Тип</span>
                  <span>{product.type}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/factory.png" alt="factory" className="spec-icon" /> 
                  <span className="flex-grow-1">Производитель</span>
                  <span>{product.manufacturer}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/model.png" alt="model" className="spec-icon" /> 
                  <span className="flex-grow-1">Модель</span>
                  <span>{product.model}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/calendar.png" alt="year" className="spec-icon" /> 
                  <span className="flex-grow-1">Год выпуска</span>
                  <span>{product.year}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/users.png" alt="cap" className="spec-icon" /> 
                  <span className="flex-grow-1">Вместимость</span>
                  <span>{product.capacity}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/ruler.png" alt="length" className="spec-icon" /> 
                  <span className="flex-grow-1">Длина</span>
                  <span>{product.length}</span>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <ul className="specs-list">
                <li className="d-flex align-items-center">
                  <img src="/images/ruler.png" alt="wings" className="spec-icon" /> 
                  <span className="flex-grow-1">Размах крыльев</span>
                  <span>{product.wingspan}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/speed.png" alt="speed" className="spec-icon" /> 
                  <span className="flex-grow-1">Крейсерская скорость</span>
                  <span>{product.speed}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/location.png" alt="range" className="spec-icon" /> 
                  <span className="flex-grow-1">Дальность полёта</span>
                  <span>{product.range}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/ruler.png" alt="alt" className="spec-icon" /> 
                  <span className="flex-grow-1">Максимальная высота</span>
                  <span>{product.maxAltitude}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/engine.png" alt="engine" className="spec-icon" /> 
                  <span className="flex-grow-1">Двигатели</span>
                  <span>{product.engines}</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="/images/business.png" alt="class" className="spec-icon" /> 
                  <span className="flex-grow-1">Класс</span>
                  <span>Эконом / Бизнес</span>
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className="about-block">
          <Row className="align-items-center">
            <Col lg={5}>
              <h5 className="fw-bold text-primary mb-3 d-flex align-items-center">
                <img src="/images/plane1.png" alt="about" className="spec-icon me-2" style={{opacity: 1}} /> 
                О самолёте
              </h5>
              <p className="text-muted small mb-0">{product.description}</p>
            </Col>
            <Col lg={7}>
              <div className="features-icons">
                <div className="feature-icon-box">
                  <img src="/images/seat.svg" alt="seat" width="40" height="40" />
                  <span>Удобные<br/>кресла</span>
                </div>
                <div className="feature-icon-box">
                  <img src="/images/wifi.svg" alt="wifi" width="40" height="40" />
                  <span>Wi-Fi<br/>на борту</span>
                </div>
                <div className="feature-icon-box">
                  <img src="/images/shield.svg" alt="shield" width="40" height="40" />
                  <span>Высокий<br/>уровень<br/>безопасности</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Product;