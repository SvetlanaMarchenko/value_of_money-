import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './RUB_Inflation.xlsx';
import './USD_Inflation.xlsx'
import './EUR_Inflation.xlsx'

const Resource = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className='resource'>
            <p>
              1. EUR inflation - 
              <a href="https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=XC" target="_blank" rel="noopener noreferrer"> Inflation, consumer prices (annual %) - Euro area </a>
            </p>
            <p>
              2. USD inflation - 
              <a href="https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=XC" target="_blank" rel="noopener noreferrer"> Inflation, consumer prices (annual %) - Euro area </a>
            </p>
            <p>
              3. RUB inflation - 
              <a href="https://rosstat.gov.ru/statistics/price#" target="_blank" rel="noopener noreferrer">Индексы потребительских цен на товары и услуги по Российской Федерации, федеральным округам и субъектам Российской Федерации (с 1992 г.)</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resource;
