// 6 kyu
function launchAll(launchMissile) {
    for(let i = 0; i < 5; i++) {    // просто замена var на let (рофлан), при vare выполняется только последнее значение
      setTimeout(function() {
        launchMissile(i);
      }, i * 1000);
    }
  }