// 4 kyu
function validSolution(board){
    for(let row of board) {
      let result = row.reduce((sum, current) => sum + current, 0);
      if(result != 45) return false
    }
    for(let i = 0; i < 9; i++) {
      let result = 0;
      for(let j = 0; j < 9; j++) {
        result += board[j][i];
      }
      if(result != 45) return false
    }
    let arr = [];
    for(let i = 0; i < 9; i++) {
    arr = arr.concat(board[i])
    }
    for(let i = 0; i < 61; i += 3) {
      let subMatrix = arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 9] + arr[i + 10] + arr[i + 11] + arr[i + 18] + arr[i + 19] + arr[i + 20];
      if(i == 6 || i == 33 || i == 60) i += 18;
      if(subMatrix != 45) return false
    }
    
    return true
  }