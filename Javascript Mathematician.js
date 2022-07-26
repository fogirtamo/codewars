// 7 kyu
function calculate() {
    let result = 0;     // замыкание и записавыние результата вычисления функций в let
 for (let i = 0; i < arguments.length; i++) {
   result += arguments[i];
 }

 return function() {
   for (let i = 0; i < arguments.length; i++) {
     result += arguments[i];
   }
   return result;
 }
}