import React, { useEffect } from 'react';

const yearNow = new Date().getFullYear();

const UniversalCalculator = ({year, sum, inflationData, onResultCalculated}) => {
  if(isNaN(year) || isNaN(sum) ) {return null}
  return sum;

  const calculateFutureValue = (currentValue, inflation, year) => {
    let thisYearAdjustedValue = currentValue * (1 + inflation / 100);
    console.log(`thisYearAdjustedValue: ${thisYearAdjustedValue}`);

    for (let i = 0; i < yearNow; i++) {
      console.log(`thisYearAdjustedValue: ${thisYearAdjustedValue}`);
      const intermediateYear = year + i;
      thisYearAdjustedValue = thisYearAdjustedValue * (1 + inflation[intermediateYear]?.inflation / 100);
    }

    return thisYearAdjustedValue;
  };
    

  /**
   * 
   * @param {*} currentYear 
   * @param {*} currentValue 
   * @param {*} inflationData 
   * @returns 
   */
  const calculateInflationAdjustedValue = (currentYear, currentValue, inflationData) => {
    if (!currentYear || !currentValue || !inflationData || inflationData.length === 0) {
      return currentValue; // Если данные отсутствуют, возвращаем текущую сумму
    }

    if (currentYear === yearNow) {
      console.log(`ебанина: ${currentYear}`);
      return currentValue; // Если данные для текущего года отсутствуют, возвращаем текущую сумму
    } else {
      console.log(`ебанина3: ${year}`);
      const inflationRate = inflationData.find(item => item.year === currentYear)?.inflation || 0;
      console.log(`Инфляционная ебанина3: ${inflationRate}`);
      const adjustedValue = calculateFutureValue(currentValue, inflationData, year);

      return adjustedValue;
    }
  };

  const result = calculateInflationAdjustedValue(year, sum, inflationData)
  onResultCalculated(result)
   

  return null; // Возвращаем null, так как данный компонент не рендерит ничего видимого
};

export default UniversalCalculator;
