import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainInfoForm from './MainInfoForm';
import CurrencySelector from './buttonGroup';
import kuva from './earth.png';
import './App.css';

const Home = () => <h2>Home Page</h2>; // Добавил текст для компонента Home
const Resource = () => <h2>Resource</h2>;
const Contact = () => <h2>Contact Page</h2>;

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


// const MyComponent = () => {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Button variant="primary">Primary Button</Button>
//         </Col>
//         <Col>
//           <Button variant="secondary">Secondary Button</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

const BlueBox = ({ children }) => {
  return (
    <div className="blue_box">
      {children}
    </div>
  );
};


const App = () => {

  return (
    <div className="App">
      
  
      <Router>
        <header className="App-header" style={{ backgroundImage: `url(${kuva})` }}>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resource" element={<Resource />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <BlueBox>
            <h1>Value of money now</h1>
            <CurrencySelector/>
            <MainInfoForm/>
            <Button className='btn_clear'>Clear</Button>
          </BlueBox>
          <MyGridComponent />
          
          
  
        </header>
      </Router>
    </div>
  );
};

export default App;
