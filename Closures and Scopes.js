// 6 kyu
function createFunctions(n) {
    var callbacks = [];
  
    for (let i=0; i<n; i++) {      // просто замена var на let (рофлан), при vare выполняется только последнее значение
      callbacks.push(function() {
        return i;
      });
    }
    
    return callbacks;
  }