// 6 kyu
function numberOfPairs(gloves){
    let set = new Set(gloves);  // new Set является обьектом, а не массивом
    let pairs = 0;              // элементы в new Set cохранены только в одном экземпляре из gloves
    
   for (value of set) {
      let includes = 0;                         
      for (let j = 0; j < gloves.length; j++) {
        if (value === gloves[j]) {            
          includes += 1;                          // после выполнения внутреннего цикла includes становчится нулем 
                                                  // из-за внешнего , так как элементы в new Set cохранены только по 1-му разу
        }
      }
      pairs += Math.floor(includes / 2)   // округление в меньшую сторону, значение includes сохраняется так как у let блочная 
                                          // область видимости (может опуститься на уровни ниже, но не подняться выше)
   }
    
    return pairs;
  }