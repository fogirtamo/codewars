// 4 kyu
function permutations(string) {
    let array = string.split('');
    let objSet = new Set();
    let arrResult = [];
    
   
    
    for(let i = 0; i < 100000; i++) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      objSet.add(array.join(''));
    }
    for(let variant of objSet){
        arrResult.push(variant)
    }
    return arrResult
  }