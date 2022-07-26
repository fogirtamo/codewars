// 6 kyu
function solution(number){
    let sum = 0
    for (let i = 0; i < number; i++){
      const crat3 = i % 3
      const crat5 = i % 5
      if (crat3 === 0 || crat5 === 0){
        sum += i
      } 
    }
   return sum
 }