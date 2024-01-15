import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import './App.css';

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <ButtonGroup className="ButtonGroup">
      <Button
        variant={selectedCurrency === 'EUR' ? 'outline-primary' : 'primary'}
        onClick={() => handleCurrencyChange('EUR')}>
        EUR
      </Button>
      <Button
        variant={selectedCurrency === 'USD' ? 'outline-primary' : 'primary'}
        onClick={() => handleCurrencyChange('USD')}>
        USD
      </Button>
      <Button
        variant={selectedCurrency === 'RUB' ? 'outline-primary' : 'primary'}
        onClick={() => handleCurrencyChange('RUB')}>
        RUB
      </Button>
    </ButtonGroup>
  );
};

export default CurrencySelector;
