import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavbarComponent from './NavbarComponent.js';
import MainInfoForm from './MainInfoForm.js';
import CurrencySelector from './buttonGroup.js';
import kuva from './earth.png';
import ContactInfo from './contactInfo.js';
import vuori from './vuori.png';
import './App.css';

const BlueBox = ({ children }) => {
  return (
    <div className="blue_box">
      {children}
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: location.pathname === '/contact' ? `url(${vuori})` : `url(${kuva})` }}>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={
            <>
              <BlueBox>
                <h1>Value of money now</h1>
                <CurrencySelector />
                <MainInfoForm />
              </BlueBox>
            </>
          } />
          <Route path="/resource" element={
            <>
              <BlueBox>
                <h1>Resource</h1>
              </BlueBox>
            </>
          }/>
          <Route path="/contact" element={<ContactInfo />} />
        </Routes>
      </header>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
