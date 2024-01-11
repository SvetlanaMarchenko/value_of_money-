import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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

export default MyGridComponent;
