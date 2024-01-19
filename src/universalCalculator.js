import React, { useEffect } from 'react';

const UniversalCalculator = ({ year, sum, inflationData, onResultChange }) => { 
  useEffect(() => {
    const adjustedValue = calculateInflationAdjustedValue(year, sum, inflationData);
    onResultChange(adjustedValue);
  }, [year, sum, inflationData, onResultChange]);

  const calculateFutureValue = (currentValue, inflation, years) => {
    console.log(year);
    return currentValue * Math.pow(1 + inflation / 100, years);
  };

  const calculateInflationAdjustedValue = (currentYear, currentValue, inflationData) => {
    if (!currentYear || !currentValue || !inflationData || inflationData.length === 0) {
      return currentValue; // Если данные отсутствуют, возвращаем текущую сумму + currentYear = это год, который заполнили в таблице
    }

    const currentYearIndex = inflationData.findIndex(item => item.year === currentYear);
    const yearNow = new Date().getFullYear()
    if (currentYearIndex === -1) {
      return currentValue; // Если данные для текущего года отсутствуют, возвращаем текущую сумму
    }

    // Рассчитываем будущее значение для всех годов в inflationData
    if (currentYearIndex !== -1) {
      const inflationRate = inflationData[currentYearIndex].inflation;
      const adjustedValue = calculateFutureValue(currentValue, inflationRate, 1);
      console.log(`Скорректированное значение: ${adjustedValue}`);
      return adjustedValue;
    }

    // Возвращаем currentValue, если данные отсутствуют.
    return currentValue;


    
  };

  // цикл/рекурсия

  return null; // Возвращаем null, так как данный компонент не рендерит ничего видимого
};

export default UniversalCalculator;
