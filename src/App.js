import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavbarComponent from './NavbarComponent.js';
import MainInfoForm from './MainInfoForm.js';
import kuva from './earth.png';
import ContactInfo from './contactInfo.js';
import vuori from './vuori.png';
import Resources from './resource.js'
import InfoModal from './infoModal.js';
import './App.css';

const BlueBox = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      <div className="App">
        <div className="main" style={{ backgroundImage: location.pathname === '/contact' ? `url(${vuori})` : `url(${kuva})` }}>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={
              <>
                <BlueBox className="blue_box">
                <InfoModal />
                  <h1>Value of money now
                  </h1>
                  <MainInfoForm />
                </BlueBox>
              </>
            } />
            <Route path="/resources" element={
              <>
                <BlueBox className="blue_box_info">
                  <h2>Resources</h2>
                  <Resources/>
                </BlueBox>
              </>
            }/>
            <Route path="/contact" element={<ContactInfo />} />
          </Routes>
        </div>
      </div>
    </>
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
