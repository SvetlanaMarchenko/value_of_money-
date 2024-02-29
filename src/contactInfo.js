import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactInfo = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="center-line">
          <div className="center-line_1">
          SVETLANA MARCHENKO 
          </div>
          </div>
          <div>
            <h1 className='introducing'>ABOUT ME</h1>
            <p className='name_direction'>
              My name is   <a className="custom-link" href="https://www.linkedin.com/in/svetlana-marchenko-6598b8a9/" target="_blank" rel="noopener noreferrer">Svetlana Marchenko</a> and this is my first web project.
              If you need a Junior full-stack developer or you have practice for me - here is my page on <a className="custom-link" href="https://www.linkedin.com/in/svetlana-marchenko-6598b8a9/" target="_blank" rel="noopener noreferrer">LinkedIn:</a>
              <a className="custom-link" href="https://www.linkedin.com/in/svetlana-marchenko-6598b8a9/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </p>
            <div className="center-line"></div>
          </div>
          
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInfo;
