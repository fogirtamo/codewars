// 6 kyu
function recycle(array) {
    let result = {
   paper: [],
   glass: [],
   organic: [],
   plastic: []
  }
 
  for (let item of array) {
   result[item['material']].push(item['type']);
   if (item.hasOwnProperty('secondMaterial')) {
    result[item['secondMaterial']].push(item['type'])
   }
  }
  
  return Object.values(result);
 }