import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './RUB_Inflation.xlsx';

const Resource = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
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
