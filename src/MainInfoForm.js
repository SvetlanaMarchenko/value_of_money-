

import React, { useState } from 'react';
import { Container, Row, Col, FormControl } from 'react-bootstrap';

import './App.css';

const MainInfoForm = () => {
  const [formData, setFormData] = useState({
    year: '',
    sum: '',
    currency: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <Container >
      <Row className="info_form">
        {/* Создаем несколько полей ввода */}
        <Col>
          <FormControl className="flex-item"
            type="number"
            placeholder="Enter Year"
            value={formData.year}
            onChange={(e) => handleInputChange('year', e.target.value)}
          />
        </Col>
      </Row>
      <Row className="info_form">
        <Col>
          <FormControl
            type="number"
            placeholder="Enter Sum"
            value={formData.sum}
            onChange={(e) => handleInputChange('sum', e.target.value)}
          />
        </Col>
      </Row>
      <Row className="info_form">
        <Col>
          <FormControl
            type="text"
            placeholder="Enter Currency"
            value={formData.currency}
            onChange={(e) => handleInputChange('currency', e.target.value)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MainInfoForm;

