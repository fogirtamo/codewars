// 7 kyu
function highAndLow(numbers){
    const numbers2 = numbers.split(' ')
    const max = Math.max(...numbers2)
    const min = Math.min(...numbers2)
    return max + ' ' + min
    
    }