import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImage from './myImage2.jpg'

const ContactInfo = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="center-line">
            MARCHENKO SVETLANA
            <div className="image-popup">
              {/* Image that will appear on hover */}
              <img src={myImage} alt="Svetlana's Photo" />
            </div>
          </div>
          <div>
            <h1 className='introducing'>ABOUT ME</h1>
            <p className='name_direction'>
              My name is   <a href="https://www.linkedin.com/in/svetlana-marchenko-6598b8a9/" target="_blank" rel="noopener noreferrer">Svetlana Marchenko</a> and this is my first web project. And any IT project.
              If you need a Junior full-stack developer or you have practice for me - here is my page on <a href="https://www.linkedin.com/in/svetlana-marchenko-6598b8a9/" target="_blank" rel="noopener noreferrer">LinkedIn:</a>
              <a href="https://www.linkedin.com/in/svetlana-marchenko-6598b8a9/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </p>
          </div>
          <div className="center-line"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactInfo;
