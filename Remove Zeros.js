// 4 kyu
function removeZeros(array) {
    let arrayX = [];
    let index = 0;
    for(let i = 0; i < array.length; i++) {
      if(array[i] !== 0 && array[i] !== "0") {
        arrayX[index] = array[i];
        index++
      } 
    }
    for(let i = 0; i < array.length; i++) {
      if(array[i] === 0 || array[i] === "0") {
        arrayX[index] = array[i];
        index++
      } 
    }
    for(let i = 0; i < arrayX.length; i++) {
      array[i] = arrayX[i]
    }
  //  label:for(let i = 0; i < array.length; i++) {
        
  //       if(array[i - 1] === 0  || && typeof array[i - 1] == 'string' || typeof array[i - 1] == 'number') {
  //         for(let j = i; +array[j - 1] == 0; j--) {
        
  //           let x;
  //           if(typeof array[j - 1] == 'string') {
  //             x = "0";
  //           }
  //           if(typeof array[j - 1] == 'number') {
  //             x = 0;
  //           }
  //           array[j - 1] = array[j];
  //           array[j] = x;
  //         }
  //       }
  
  //       let x = 0;
  //       for(let n = i; n < array.length; n++) {
  //         if(array[n] !== "0" || array[n] !== 0) x++;
  //       }
  //       if(x == 0) break label;
  //   }
  
    return array;
  }