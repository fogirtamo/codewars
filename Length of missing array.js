// 6 kyu
function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0) {               // исключение
      return 0;
    }
    
    for (let item of arrayOfArrays) {                                         // исключение
      if (item === null || item.length === 0) {
        return 0;
      }
    }
    
    let array = arrayOfArrays.map(item => item.length).sort((a, b) => a - b)   // создает новый массив из значений длин массивов и созтирует по возрастанию
    for (let i=0; i<=array[i]; i++){
      if (array[i] + 1 !== array[i+1]){   // сравнение двух последовательных значений
      return array[i] + 1    
      }
  }
  }