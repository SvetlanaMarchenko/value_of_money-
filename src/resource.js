import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './RUB_Inflation.xlsx';
import './USD_Inflation.xlsx'

const Resource = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <p>
              2. USD inflation - 
              <a href="https://www.usinflationcalculator.com/inflation/consumer-price-index-and-annual-percent-changes-from-1913-to-2008/" target="_blank" rel="noopener noreferrer"> Consumer Price Index Data from 1914 to 2023 </a>
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
