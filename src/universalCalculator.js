import './RUB_Inflation.xlsx';

const yearNow = new Date().getFullYear();

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

// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx';

// const yearNow = new Date().getFullYear();

// const UniversalCalculator = ({ year, sum }) => {
//   const [inflationData, setInflationData] = useState([]);

//   useEffect(() => {
//     const fetchInflationData = async () => {
//       try {
//         const response = await fetch('./RUB_Inflation.xlsx');
//         const arrayBuffer = await response.arrayBuffer();
//         const data = new Uint8Array(arrayBuffer);
//         const workbook = XLSX.read(data, { type: 'array' });
//         const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
//         const parsedData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
//         setInflationData(parsedData);
//       } catch (error) {
//         console.error('Error fetching inflation data:', error);
//       }
//     };

//     fetchInflationData();
//   }, []); // Empty dependency array ensures that the effect runs once when the component mounts

//   if ((!year || !sum || !inflationData || inflationData.length === 0) || (year === yearNow)) {
//     return sum;
//   }

//   if (year !== yearNow) {
//     let thisYearAdjustedValue = sum;

//     while (year < yearNow) {
//       const inflationRate = inflationData.find(item => item.year === year)?.inflation || 0;
//       console.log(`Инфляция: ${inflationRate}`);
//       console.log(`year: ${year}`);
//       console.log(`thisYearAdjustedValue: ${thisYearAdjustedValue}`);
//       thisYearAdjustedValue = thisYearAdjustedValue * (1 + inflationRate / 100);

//       year += 1;
//     }

//     return thisYearAdjustedValue.toFixed(2);
//   }

//   // Render a placeholder or loading state while waiting for the inflation data
//   return <p>Loading...</p>;
// };

// export default UniversalCalculator;
