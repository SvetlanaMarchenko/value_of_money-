// MainInfoForm.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, FormControl } from 'react-bootstrap';
import UniversalCalculator from './universalCalculator.js';
import * as XLSX from 'xlsx';
import RUB_Inflation from './RUB_Inflation.xlsx';
import USD_Inflation from './USD_Inflation.xlsx';
import EUR_Inflation from './EUR_Inflation.xlsx';
import CurrencySelector from './buttonGroup.js'; // Предполагается, что этот файл селектора валют экспортирует компонент CurrencySelector
import './App.css';

const MainInfoForm = () => {
  const [formData, setFormData] = useState({
    year: '',
    sum: '',
  });

  const [inflationData, setInflationData] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const fetchInflationData = async (currency) => {
    let inflationFile;
    if (currency === 'EUR') {
      inflationFile = EUR_Inflation;
    } else if (currency === 'USD') {
      inflationFile = USD_Inflation;
    } else if (currency === 'RUB') {
      inflationFile = RUB_Inflation;
    }

    try {
      const response = await fetch(inflationFile);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const arrayBuffer = await response.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const parsedData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      setInflationData(parsedData);
      console.log("parsedData", parsedData);
    } catch (error) {
      console.error('Error fetching inflation data:', error);
    }
  };

  const handleResultChange = (result) => {
    const formattedResult = result.toFixed(2);
    console.log(formattedResult);
  };

  useEffect(() => {
    fetchInflationData(); // Initially fetch inflation data
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <Container>
      <CurrencySelector onSelectCurrency={fetchInflationData} />
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
      </Row>
      <Row>
        <Col className="calculator">
          <UniversalCalculator
            year={parseInt(formData.year)}
            sum={parseFloat(formData.sum)}
            inflationData={inflationData}
            onResultCalculated={handleResultChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MainInfoForm;
