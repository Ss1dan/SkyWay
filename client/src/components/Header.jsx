import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3 sticky-top">
      <Container>

        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center fw-bold fs-3">
          <img
            src="/images/logo.png"
            width="45"
            height="40"
            className="d-inline-block align-top me-2"
            alt="SkyWay logo"
          />
          <span className="text-skyway-orange">SkyWay</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4">
            <Nav.Link as={NavLink} to="/" activeClassName="active">Главная</Nav.Link>
            <Nav.Link as={NavLink} to="/catalog" activeClassName="active">Каталог</Nav.Link>
            <Nav.Link as={NavLink} to="/contacts" activeClassName="active">Контакты</Nav.Link>
          </Nav>

          <div className="d-flex gap-2 align-items-center mt-3 mt-lg-0">
            <Button as={Link} to="/login" variant="light" className="rounded-pill text-primary fw-semibold border-0 bg-light px-3 py-2">
              <FiUser className="me-1 mb-1" /> Годовиков Александр
            </Button>
            <Button as={Link} to="/logout" className="btn-skyway-orange rounded-pill px-4 py-2 fw-semibold">
              Выйти
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;