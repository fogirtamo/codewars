// 6 kyu
function deepCount(a){
    let res = 0
    for (let i=0; i<a.length; i++) {
      res += 1
      if (Array.isArray(a[i])) {
      res += deepCount(a[i])
      } 
    }
    return res
  }