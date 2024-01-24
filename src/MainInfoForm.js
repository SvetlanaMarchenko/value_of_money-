import React, { useState } from 'react';
import { Container, Row, Col, FormControl } from 'react-bootstrap';
import UniversalCalculator from './universalCalculator.js';

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

  // const handleResultChange = (result) => {
  //   setFormData({
  //     ...formData,
  //     result: result.toFixed(2), // Округляем результат до двух знаков после запятой
  //   });
  // };

  const handleResultChange = (result) => {
    const formattedResult = result.toFixed(2);
    // Ваша логика обработки результата
    console.log(formattedResult);
  };

  const myInflationDataArray = [
    { year: 2021, inflation: 1 },
    { year: 2022, inflation: 2 },
    { year: 2023, inflation: 4 },
  ];
  

  return (
    <Container>
      <Row className="info_form">
        <Col>
          <FormControl
            className="flex-item"
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
            placeholder="Get result"
            value={formData.result}
            readOnly
          />
        </Col>
      </Row>
      <Row className="info_form">
        <Col>
          {/* Используем UniversalCalculator */}
          <UniversalCalculator
            year={parseInt(formData.year)}
            sum={parseFloat(formData.sum)}
            inflationData={myInflationDataArray}
            onResultCalculated={handleResultChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MainInfoForm;
