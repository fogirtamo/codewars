// 7 kyu
function explode(s) {
    const mass = s.split('')
    const jopa = mass.map((item) => {
     return item.repeat(+item)
    } )
    return jopa.join('');
  }