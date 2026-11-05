import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', surname: '', patronymic: '', login: '', email: '', password: '', password_repeat: '', rules: false
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const existingLogins = ['admin', 'test', 'user123'];
  const existingEmails = ['test@mail.ru', 'admin@skyway.ru'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let newErrors = {};
    const cyrillicRegex = /^[А-Яа-яЁё\s-]+$/;
    const latinRegex = /^[A-Za-z0-9-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    else if (!cyrillicRegex.test(formData.name)) newErrors.name = 'Только кириллица, пробел и тире';

    if (!formData.surname.trim()) newErrors.surname = 'Фамилия обязательна';
    else if (!cyrillicRegex.test(formData.surname)) newErrors.surname = 'Только кириллица, пробел и тире';

    if (formData.patronymic && !cyrillicRegex.test(formData.patronymic)) newErrors.patronymic = 'Только кириллица, пробел и тире';

    if (!formData.login.trim()) newErrors.login = 'Логин обязателен';
    else if (!latinRegex.test(formData.login)) newErrors.login = 'Только латиница, цифры и тире';
    else if (existingLogins.includes(formData.login.toLowerCase())) newErrors.login = 'Этот логин уже занят';

    if (!formData.email.trim()) newErrors.email = 'Email обязателен';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Некорректный Email';
    else if (existingEmails.includes(formData.email.toLowerCase())) newErrors.email = 'Email уже занят';

    if (!formData.password) newErrors.password = 'Пароль обязателен';
    else if (formData.password.length < 6) newErrors.password = 'Минимум 6 символов';

    if (!formData.password_repeat) newErrors.password_repeat = 'Повторите пароль';
    else if (formData.password !== formData.password_repeat) newErrors.password_repeat = 'Пароли не совпадают';

    if (!formData.rules) newErrors.rules = 'Согласитесь с правилами';

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
      setTimeout(() => navigate('/login'), 2000);
    }
  };

  return (
    <div className="auth-page">
      <Container>
        <Row className="justify-content-center">
          {/* Уменьшили ширину карточки */}
          <Col xl={9} lg={10}>
            <div className="auth-card">
              <Row className="g-0">
                {/* ЛЕВАЯ ПАНЕЛЬ */}
                <Col md={5} className="auth-left-panel d-none d-md-flex">
                  <div className="auth-left-content">
                    <img src="/images/logo.png" alt="SkyWay" width="100" className="mb-2" />
                    <h2 className="fw-bold mb-2" style={{color: '#f97316'}}>SkyWay</h2>
                    <p className="text-secondary small fw-semibold">Создай аккаунт и открой<br/>мир путешествий</p>
                  </div>
                </Col>

                {/* ПРАВАЯ ПАНЕЛЬ */}
                <Col md={7} className="auth-form-panel">
                  <h3 className="auth-title mb-1">Регистрация</h3>
                  <p className="text-muted small mb-3">Поля со звездочкой обязательны.</p>

                  {showSuccess && <Alert variant="success" className="py-2 small">Успешно! Перенаправление...</Alert>}

                  <Form onSubmit={handleSubmit} noValidate>
                    {/* Имя */}
                    <div className="d-flex align-items-start mb-2">
                      <div className={`input-group-custom flex-grow-1 ${errors.name ? 'is-invalid' : ''}`}>
                        <img src="/images/icon_people.png" alt="user" className="input-icon" />
                        <div className="form-floating-custom">
                          <label>Имя *</label>
                          <Form.Control type="text" name="name" placeholder="Введите имя" value={formData.name} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="helper-text d-none d-lg-flex">Только кириллица, пробел и тире</div>
                    </div>
                    {errors.name && <div className="text-danger small mb-2 ms-1">{errors.name}</div>}

                    {/* Фамилия */}
                    <div className="d-flex align-items-start mb-2">
                      <div className={`input-group-custom flex-grow-1 ${errors.surname ? 'is-invalid' : ''}`}>
                        <img src="/images/icon_people.png" alt="user" className="input-icon" />
                        <div className="form-floating-custom">
                          <label>Фамилия *</label>
                          <Form.Control type="text" name="surname" placeholder="Введите фамилию" value={formData.surname} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="helper-text d-none d-lg-flex">Только кириллица, пробел и тире</div>
                    </div>
                    {errors.surname && <div className="text-danger small mb-2 ms-1">{errors.surname}</div>}

                    {/* Отчество */}
                    <div className="d-flex align-items-start mb-2">
                      <div className={`input-group-custom flex-grow-1 ${errors.patronymic ? 'is-invalid' : ''}`}>
                        <img src="/images/icon_people.png" alt="user" className="input-icon" />
                        <div className="form-floating-custom">
                          <label>Отчество</label>
                          <Form.Control type="text" name="patronymic" placeholder="Введите отчество" value={formData.patronymic} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="helper-text d-none d-lg-flex">Только кириллица, пробел и тире</div>
                    </div>
                    {errors.patronymic && <div className="text-danger small mb-2 ms-1">{errors.patronymic}</div>}

                    {/* Логин */}
                    <div className="d-flex align-items-start mb-2">
                      <div className={`input-group-custom flex-grow-1 ${errors.login ? 'is-invalid' : ''}`}>
                        <img src="/images/icon_login.png" alt="login" className="input-icon" />
                        <div className="form-floating-custom">
                          <label>Логин *</label>
                          <Form.Control type="text" name="login" placeholder="Введите логин" value={formData.login} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="helper-text d-none d-lg-flex">Латиница, цифры и тире</div>
                    </div>
                    {errors.login && <div className="text-danger small mb-2 ms-1">{errors.login}</div>}

                    {/* Email */}
                    <div className="d-flex align-items-start mb-2">
                      <div className={`input-group-custom flex-grow-1 ${errors.email ? 'is-invalid' : ''}`}>
                        <img src="/images/icon_email.png" alt="email" className="input-icon" />
                        <div className="form-floating-custom">
                          <label>Email *</label>
                          <Form.Control type="email" name="email" placeholder="example@mail.com" value={formData.email} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="helper-text d-none d-lg-flex">Уникальный e-mail</div>
                    </div>
                    {errors.email && <div className="text-danger small mb-2 ms-1">{errors.email}</div>}

                    {/* Пароль */}
                    <div className="d-flex align-items-start mb-2">
                      <div className={`input-group-custom flex-grow-1 ${errors.password ? 'is-invalid' : ''}`}>
                        <img src="/images/icon_keyhole.png" alt="lock" className="input-icon" />
                        <div className="form-floating-custom">
                          <label>Пароль *</label>
                          <Form.Control type="password" name="password" placeholder="Минимум 6 символов" value={formData.password} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="helper-text d-none d-lg-flex">Не менее 6 символов</div>
                    </div>
                    {errors.password && <div className="text-danger small mb-2 ms-1">{errors.password}</div>}

                    {/* Повтор пароля */}
                    <div className="d-flex align-items-start mb-3">
                      <div className={`input-group-custom flex-grow-1 ${errors.password_repeat ? 'is-invalid' : ''}`}>
                        <img src="/images/icon_keyhole.png" alt="lock" className="input-icon" />
                        <div className="form-floating-custom">
                          <label>Повторите пароль *</label>
                          <Form.Control type="password" name="password_repeat" placeholder="Повторите пароль" value={formData.password_repeat} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="helper-text d-none d-lg-flex">Должен совпадать с паролем</div>
                    </div>
                    {errors.password_repeat && <div className="text-danger small mb-2 ms-1">{errors.password_repeat}</div>}

                    {/* Правила */}
                    <Form.Group className="mb-3">
                      <Form.Check 
                        type="checkbox" name="rules" id="rules"
                        label={<span className="small">Я согласен(на) с <a href="#" className="text-primary text-decoration-none">правилами регистрации</a> *</span>}
                        checked={formData.rules} onChange={handleChange}
                        isInvalid={!!errors.rules}
                      />
                      {errors.rules && <div className="text-danger small mt-1">{errors.rules}</div>}
                    </Form.Group>

                    <Button variant="none" type="submit" className="btn-orange w-100 rounded-pill fs-6 mb-2">
                      Зарегистрироваться
                    </Button>
                    
                    <div className="text-center small mt-2">
                      Уже есть аккаунт? <Link to="/login" className="text-primary text-decoration-none fw-semibold">Войти</Link>
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

export default Register;