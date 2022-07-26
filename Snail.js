// 4 kyu
snail = function(array) {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      if(array.length == 0) break
      arr = arr.concat(array[0]);
      array.shift();
      
      for(let j = 0; j < array.length; j++) {
        arr.push(array[j].pop())
      }
      
      for(let n = array.length - 1; n > - 1; n--) {
        arr.push(array[array.length - 1][n])
      }
      array.pop();
      
      for(let x = array.length - 1; x > - 1; x--) {
        arr.push(array[x].shift())
      }
    }
    return arr
  }