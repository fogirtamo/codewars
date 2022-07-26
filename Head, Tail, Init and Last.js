// 7 kyu
// TODO: implement the four functions specified.
function head (array) {
    const headArray = array[0]
    return headArray
 }
 
 function tail(array) {
     const x = [...array]    //  spread опускает скобки массива (становится 2 массива вместо одного и исходные не изменяется)
     x.shift()
     return x
 }
 
 function init (array) {     //  spread опускает скобки массива (становится 2 массива вместо одного и исходные не изменяется)
     const y = [...array]
     y.pop()
     return y
 }
 
 function last (array) {
     return array[array.length-1]  
 }