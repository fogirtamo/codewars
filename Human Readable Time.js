// 5 kyu
function humanReadable (seconds) {
    let arr = [];
    let hours = Math.trunc(seconds / 3600);
    let min = Math.trunc((seconds - hours * 3600) / 60);
    let sec = seconds - (hours * 3600 + min * 60);
    arr.push(hours);
    arr.push(min);
    arr.push(sec);
    for(let i = 0; i < 3; i++) {
      if(arr[i] < 10) arr[i] = '0' + arr[i]; 
    }  
    let result = arr.join(':');
    return result;
  }