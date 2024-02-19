const UniversalCalculator = ({ year, sum, inflationData, selectedCurrency }) => {
  const yearNow = new Date().getFullYear();
  console.log(yearNow)

  if (!year || !sum || !inflationData || inflationData.year === undefined) {
    console.log(inflationData)
    return 0;
  }
  
  if (year === yearNow) {
    return sum;
  }
  
  if (year !== yearNow) {
    let thisYearAdjustedValue = sum;

    while (year < yearNow) {
      const inflationRate = inflationData.find(item => item.year === year)?.inflation || 0;
      thisYearAdjustedValue *= (1 + inflationRate / 100);
      year += 1;
    }

    let formattedResult = thisYearAdjustedValue.toFixed(2);

    if (selectedCurrency === 'EUR') {
      formattedResult += ' EUR';
    } else if (selectedCurrency === 'USD') {
      formattedResult = ' $'+ formattedResult;
    } else if (selectedCurrency === 'RUB') {
      formattedResult += ' RUB';
    }
    console.log("результат: ", formattedResult);
    return formattedResult;
  }
};

export default UniversalCalculator;
