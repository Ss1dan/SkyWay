import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contacts = () => {
  return (
    <Container className="my-5 p-4 bg-white rounded shadow-sm">
      <h1>Контакты</h1>
      <Row className="mt-4">
        <Col md={6}>
          <p><strong>Адрес:</strong> г. Москва, ул. Путешествий, 1</p>
          <p><strong>Телефон:</strong> +7 (800) 123-45-67</p>
          <p><strong>Email:</strong> support@skyway.ru</p>
        </Col>
        <Col md={6} className="bg-light d-flex align-items-center justify-content-center rounded" style={{minHeight: '200px'}}>
          <span className="text-muted">[Тут будет карта]</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacts;