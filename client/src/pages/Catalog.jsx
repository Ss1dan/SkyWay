import React from 'react';
import { Container } from 'react-bootstrap';

const Catalog = () => {
  return (
    <Container className="my-5 p-4 bg-white rounded shadow-sm">
      <h1>Каталог товаров</h1>
      <p className="text-muted">Здесь скоро появятся самолеты...</p>
    </Container>
  );
};

export default Catalog;