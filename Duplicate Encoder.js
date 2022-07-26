// 6 kyu
function duplicateEncode(word){
    let x = ''
    word = word.toLowerCase()
    for (let i=0; i < word.length; i++){
      const array = word.split(word[i]).join('')
      if (array.length + 1 === word.length){
        x += '('
      } else {
        x += ')'
      }
    }
   return x
 }