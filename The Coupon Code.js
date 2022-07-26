// 7 kyu
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode !== correctCode) {
    return false;
  }
  
  let curDate = new Date(currentDate);
  let expDate = new Date(expirationDate);
  if (curDate > expDate) {
    return false;
  }
  return true;
}