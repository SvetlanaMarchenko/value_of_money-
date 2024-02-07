import './RUB_Inflation.xlsx';
import './USD_Inflation.xlsx'
import './EUR_Inflation.xlsx'

// const yearNow = new Date().getFullYear();
const yearNow = 2023

const UniversalCalculator = ({ year, sum, inflationData }) => {
  if ((!year || !sum || !inflationData || inflationData.length === 0) || (year === yearNow)) {
    return sum; // Если данные отсутствуют или год равен текущему году, возвращаем текущую сумму
  }

  if (year !== yearNow) {
    let thisYearAdjustedValue = sum; // Начальное значение для первого года

    while (year < yearNow) {
      const inflationRate = inflationData.find(item => item.year === year)?.inflation || 0;
      console.log(`Инфляция: ${inflationRate}`);
      console.log(`year: ${year}`);
      console.log(`thisYearAdjustedValue: ${thisYearAdjustedValue}`);
      thisYearAdjustedValue = thisYearAdjustedValue * (1 + inflationRate / 100);

      year += 1;
    }

    return thisYearAdjustedValue.toFixed(2); // Возвращаем итоговое значение после завершения цикла
  }
};

export default UniversalCalculator;
