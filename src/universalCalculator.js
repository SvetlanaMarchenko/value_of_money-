import React, { useEffect } from 'react';

const UniversalCalculator = ({ year, sum, inflationData, onResultChange }) => {
  useEffect(() => {
    const adjustedValue = calculateInflationAdjustedValue(year, sum, inflationData);
    onResultChange(adjustedValue);
  }, [year, sum, inflationData, onResultChange]);

  const calculateFutureValue = (currentValue, inflation, years) => {
    return currentValue * Math.pow(1 + inflation / 100, years);
  };

  const calculateInflationAdjustedValue = (currentYear, currentValue, inflationData) => {
    if (!currentYear || !currentValue || !inflationData || inflationData.length === 0) {
      return currentValue; // Если данные отсутствуют, возвращаем текущую сумму
    }

    const currentYearIndex = inflationData.findIndex(item => item.year === currentYear);
    if (currentYearIndex === -1) {
      return currentValue; // Если данные для текущего года отсутствуют, возвращаем текущую сумму
    }

    const futureValue = calculateFutureValue(
      currentValue,
      inflationData[currentYearIndex].inflation,
      inflationData.length
    );

    return futureValue;
  };

  return null; // Возвращаем null, так как данный компонент не рендерит ничего видимого
};

export default UniversalCalculator;
