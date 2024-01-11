import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
    </div>
  );
};





export default App;

