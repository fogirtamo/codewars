// 7 kyu
function disemvowel(str) {
    str = str.split('e').join('')
    str = str.split('u').join('')
    str = str.split('i').join('')
    str = str.split('o').join('')
    str = str.split('a').join('')
    str = str.split('O').join('')
    str = str.split('I').join('')
    str = str.split('A').join('')
    str = str.split('E').join('')
    str = str.split('U').join('')
    return str;
  }