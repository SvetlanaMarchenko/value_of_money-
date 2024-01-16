import React, { useState } from 'react';
import { Container, Row, Col, FormControl } from 'react-bootstrap';

import './App.css';

const MainInfoForm = () => {
  const [formData, setFormData] = useState({
    year: '',
    sum: '',
    result: '',
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
        <Col>
          <FormControl className="flex-item"
            type="number"
            placeholder="Enter Year"
            // value={formData.year}
            onChange={(e) => handleInputChange('year', e.target.value)}
          />
        </Col>
      </Row>
      <Row className="info_form">
        <Col>
          <FormControl
            type="number"
            placeholder="Enter Sum"
            // value={formData.sum}
            onChange={(e) => handleInputChange('sum', e.target.value)}
          />
        </Col>
      </Row>
      <Row className="info_form">
        <Col>
          <FormControl
          placeholder="Get result"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MainInfoForm;

