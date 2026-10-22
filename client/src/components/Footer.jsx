import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaVk, FaTelegramPlane, FaOdnoklassniki, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-skyway">
      <Container className="position-relative z-1">
        <Row className="pt-5 pb-4">
          
          <Col lg={4} md={12} className="mb-4 mb-lg-0 d-flex flex-column align-items-start">
            <Link to="/" className="d-flex align-items-center fw-bold fs-3 mb-2 text-decoration-none">
              <img 
                src="/images/logo.png" 
                width="50" 
                height="45" 
                className="me-2" 
                alt="logo"
              />
              <span className="text-skyway-orange">SkyWay</span>
            </Link>
            <p className="text-secondary small">Путешествия, которые вдохновляют</p>
          </Col>

          <Col lg={2} md={4} sm={6} className="mb-4 mb-lg-0 nav-column">
            <h6 className="footer-heading">Навигация</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/catalog">Каталог</Link></li>
              <li><Link to="/contacts">О нас</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </Col>

          <Col lg={4} md={5} sm={6} className="mb-4 mb-lg-0 ps-lg-4">
            <h6 className="footer-heading">Связь с нами</h6>
            <ul className="list-unstyled footer-contacts">
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:support@skyway.ru">support@skyway.ru</a>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <a href="tel:+78001234567">+7 (800) 123-45-67</a>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Москва, ул. Путешествий, 1</span>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={3} sm={12} className="d-flex justify-content-lg-end justify-content-start align-items-start mt-4 mt-lg-0">
            <div className="d-flex gap-2">
              <a href="#" className="social-btn social-vk"><FaVk /></a>
              <a href="#" className="social-btn social-tg"><FaTelegramPlane /></a>
              <a href="#" className="social-btn social-ok"><FaOdnoklassniki /></a>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom pt-3 pb-2 d-flex flex-column flex-md-row justify-content-between align-items-center border-top border-light">
          <div className="text-muted small mb-2 mb-md-0">
          </div>
          <div className="d-flex gap-4 small">
            <a href="#" className="text-secondary text-decoration-none hover-blue">Политика конфиденциальности</a>
            <a href="#" className="text-secondary text-decoration-none hover-blue">Пользовательское соглашение</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;