import React, { useState } from 'react';
import { Button, Container, Row, Col, ButtonGroup } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import kuva from './earth.png';
import './App.css';

const Home = () => <h2>Home Page</h2>; // Добавил текст для компонента Home
const Resource = () => <h2>Resource</h2>;
const Contact = () => <h2>Contact Page</h2>;

const MyGridComponent = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>Колонка 1</Col>
        <Col md={6}>Колонка 2</Col>
      </Row>
    </Container>
  );
};

const MyComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Button variant="primary">Primary Button</Button>
        </Col>
        <Col>
          <Button variant="secondary">Secondary Button</Button>
        </Col>
      </Row>
    </Container>
  );
};

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div className="App">
      <Router>
        <header className="App-header" style={{ backgroundImage: `url(${kuva})` }}>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resource" element={<Resource />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ButtonGroup>
            <Button
              variant={selectedCurrency === 'EUR' ? 'outline-primary' : 'primary'}
              onClick={() => handleCurrencyChange('EUR')}>
              EUR
            </Button>
            <Button
              variant={selectedCurrency === 'USD' ? 'outline-primary' : 'primary'}
              onClick={() => handleCurrencyChange('USD')}>
              USD
            </Button>
            <Button
              variant={selectedCurrency === 'RUB' ? 'outline-primary' : 'primary'}
              onClick={() => handleCurrencyChange('RUB')}>
              RUB
            </Button>
          </ButtonGroup>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MyGridComponent />
          <MyComponent />
        </header>
      </Router>
    </div>
  );
};

export default App;
