const UniversalCalculator = ({ year, sum, inflationData, selectedCurrency }) => {
  const yearNow = new Date().getFullYear();
  if (!year || !sum || !inflationData || inflationData.length === 0) {
    return 0;
  }

  if (year === yearNow) {
    return sum;
  }
  
  if (year !== yearNow) {
    let thisYearAdjustedValue = sum;

    const inflationRate = inflationData.find(item => item.year === year);
    if (!inflationRate || inflationRate.inflation === 0) {
      return 0;
    }

    while (year < yearNow) {
      const inflationRate = inflationData.find(item => item.year === year)?.inflation || 0;
      thisYearAdjustedValue *= (1 + inflationRate / 100);
      year += 1;
    }

    let formattedResult = thisYearAdjustedValue.toFixed(2);

    if (selectedCurrency === 'EUR') {
      formattedResult += ' EUR';
    } else if (selectedCurrency === 'USD') {
      formattedResult += ' USD';
    } else if (selectedCurrency === 'RUB') {
      formattedResult += ' RUB';
    }

    return formattedResult;
  }
};

export default UniversalCalculator;
