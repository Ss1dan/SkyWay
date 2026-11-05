import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ login: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.login.trim()) newErrors.login = 'Введите логин';
    if (!formData.password) newErrors.password = 'Введите пароль';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setShowSuccess(true);
      setTimeout(() => navigate('/'), 1500);
    }
  };

  return (
    <div className="auth-page">
      <Container>
        <Row className="justify-content-center">
          <Col xl={8} lg={9}> {/* Сделал карточку входа чуть уже, как на макете */}
            <div className="auth-card">
              <Row className="g-0">
                {/* ЛЕВАЯ ПАНЕЛЬ */}
                <Col md={5} className="auth-left-panel d-none d-md-flex">
                  <div className="auth-left-content">
                    <img src="/images/logo.png" alt="SkyWay" width="100" className="mb-2" />
                    <h2 className="fw-bold mb-2" style={{color: '#f97316'}}>SkyWay</h2>
                    <p className="text-secondary small fw-semibold">С возвращением!<br/>Рады видеть тебя снова.</p>
                  </div>
                </Col>

                {/* ПРАВАЯ ПАНЕЛЬ */}
                <Col md={7} className="auth-form-panel">
                  <h3 className="auth-title mb-1">Вход в аккаунт</h3>
                  <p className="text-muted small mb-4">Введи свои данные, чтобы продолжить</p>

                  {showSuccess && <Alert variant="success" className="py-2 small">Успешный вход!</Alert>}

                  <Form onSubmit={handleSubmit} noValidate>
                    {/* Логин */}
                    <div className="d-flex align-items-start mb-3">
                      <div className={`input-group-custom flex-grow-1 ${errors.login ? 'is-invalid' : ''}`}>
                        <img src="/images/icon_people.png" alt="user" className="input-icon" />
                        <div className="form-floating-custom">
                          <label>Логин</label>
                          <Form.Control type="text" name="login" placeholder="Введите логин" value={formData.login} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                    {errors.login && <div className="text-danger small mb-2 ms-1">{errors.login}</div>}

                    {/* Пароль */}
                    <div className="d-flex align-items-start mb-4">
                      <div className={`input-group-custom flex-grow-1 ${errors.password ? 'is-invalid' : ''}`}>
                        <img src="/images/icon_keyhole.png" alt="lock" className="input-icon" />
                        <div className="form-floating-custom">
                          <label>Пароль</label>
                          <Form.Control 
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            placeholder="Введите пароль" 
                            value={formData.password} 
                            onChange={handleChange} 
                          />
                        </div>
                        <span 
                          onClick={() => setShowPassword(!showPassword)} 
                          style={{cursor: 'pointer', padding: '0 5px'}}
                        >
                          <img src={showPassword ? "/images/icon_eye.png" : "/images/icon_eye_close.png"} alt="eye" width="18" height="18" style={{opacity: 0.5}} />
                        </span>
                      </div>
                    </div>
                    {errors.password && <div className="text-danger small mb-2 ms-1">{errors.password}</div>}

                    <Button variant="none" type="submit" className="btn-orange w-100 rounded-pill fs-6 mb-3">
                      Войти
                    </Button>
                    
                    <div className="text-center mb-4">
                      <a href="#" className="text-primary text-decoration-none small fw-semibold">Забыли пароль?</a>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <hr className="flex-grow-1 text-muted m-0" />
                      <span className="px-3 text-muted small">или</span>
                      <hr className="flex-grow-1 text-muted m-0" />
                    </div>

                    <div className="text-center">
                      <p className="text-muted small mb-2">Нет аккаунта?</p>
                      <Link to="/register" variant="none" className="btn btn-outline-blue w-100 rounded-pill fs-6">
                        Зарегистрируйся
                      </Link>
                    </div>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;