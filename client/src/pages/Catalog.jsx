import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productsData } from '../data/products';
import './Catalog.css';

const Catalog = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [category, setCategory] = useState('Все категории');

  const categories = [
    { name: 'Все категории', count: 24, icon: '/images/plane1.png' },
    { name: 'Пассажирские рейсы', count: 12, icon: '/images/plane1.png' },
    { name: 'Бизнес-класс', count: 5, icon: '/images/business.png' },
    { name: 'Эконом-класс', count: 7, icon: '/images/economy.png' },
    { name: 'Чартерные рейсы', count: 3, icon: '/images/charter.png' },
    { name: 'Грузовые рейсы', count: 2, icon: '/images/cargo.png' }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsData];

    if (category !== 'Все категории') {
      result = result.filter(product => product.category === category);
    }

    result.sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'year') return b.year - a.year;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

    return result;
  }, [sortBy, category]);

  return (
    <div className="bg-light pb-5">
      <div className="catalog-hero mb-4">
        <Container>
          <h1 className="display-4 fw-bold mb-3">Каталог</h1>
          <p className="fs-5 mb-0">Выбирайте из тысяч направлений<br/>и находите идеальные рейсы для своих путешествий.</p>
        </Container>
      </div>

      <Container>
        <Row>
          <Col lg={3} className="mb-4">
            <div className="sidebar-card">
              <h5 className="sidebar-title d-flex align-items-center">
                <img src="/images/filter.png" alt="filter" className="icon-md" /> Категории
              </h5>
              <ul className="category-list">
                {categories.map(cat => (
                  <li 
                    key={cat.name}
                    className={`category-item ${category === cat.name ? 'active' : ''}`}
                    onClick={() => setCategory(cat.name)}
                  >
                    <span className="d-flex align-items-center">
                      <img src={cat.icon} alt={cat.name} />
                      {cat.name}
                    </span>
                    <span className="category-count">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-card">
              <h5 className="sidebar-title d-flex align-items-center">
                <img src="/images/settings.png" alt="filter" className="icon-md" /> Фильтры
              </h5>
              
              <Form.Group className="mb-4">
                <Form.Label className="small fw-bold text-muted mb-2">Год производства</Form.Label>
                <Form.Select size="sm">
                  <option>Любой</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="small fw-bold text-muted mb-2">Цена</Form.Label>
                <Form.Range />
                <div className="d-flex justify-content-between text-muted small mt-1">
                  <span>от 10 000 ₽</span>
                  <span>до 500 000 ₽</span>
                </div>
              </Form.Group>

              <Form.Group>
                <Form.Label className="small fw-bold text-muted mb-2">Наличие</Form.Label>
                <Form.Check type="checkbox" label="Только в наличии" defaultChecked />
              </Form.Group>
            </div>
          </Col>

          <Col lg={9}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="fw-bold text-muted">Найдено {filteredAndSortedProducts.length} рейса</span>
              
              <div className="d-flex align-items-center">
                <span className="me-2 text-muted small">Сортировать по:</span>
                <Form.Select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  size="sm"
                  style={{ width: '150px', borderRadius: '8px' }}
                >
                  <option value="newest">Новизне</option>
                  <option value="price">Цене</option>
                  <option value="year">Году</option>
                  <option value="name">Названию</option>
                </Form.Select>
              </div>
            </div>

            <Row className="g-4">
              {filteredAndSortedProducts.map(product => (
                <Col key={product.id} md={6} xl={4}>
                  <Card as={Link} to={`/product/${product.id}`} className="product-card-new text-decoration-none">
                    <div className="product-img-wrapper">
                      <img src={product.image} alt={product.name} />
                      {product.inStock && <span className="badge-stock">В наличии</span>}
                    </div>
                    <div className="product-card-body">
                      <h6 className="product-title-new">{product.name}</h6>
                      
                      <div className="product-meta">
                        <img src="/images/location.png" alt="route" className="icon-sm" /> {product.route}
                      </div>
                      <div className="product-meta">
                        <img src="/images/calendar.png" alt="year" className="icon-sm" /> {product.year}
                      </div>
                      <div className="product-meta">
                        <img src="/images/business.png" alt="class" className="icon-sm" /> {product.classType}
                      </div>
                      
                      <div className="product-price-row">
                        <span className="product-price-new">от {product.price.toLocaleString()} ₽</span>
                        <span className="btn-arrow">›</span>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            
            <div className="d-flex justify-content-center mt-5">
              <nav>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link text-primary" href="#">‹</a></li>
                  <li className="page-item active"><a className="page-link bg-primary border-primary" href="#">1</a></li>
                  <li className="page-item"><a className="page-link text-primary" href="#">2</a></li>
                  <li className="page-item"><a className="page-link text-primary" href="#">3</a></li>
                  <li className="page-item"><a className="page-link text-primary" href="#">›</a></li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Catalog;