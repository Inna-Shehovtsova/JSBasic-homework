// Homework 1

export function sum(a, b) {
  return a + b;
}
export function mul(a, b) {
  return a * b;
}
export function strLengthSum(str1, str2) {
  return str1.length + str2.length;
}
// Homework 2
export function maximum(a, b) {
  return a > b ? a : b;
}
export function mothFromIndex(index) {
  let month = "";
  switch (index) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "Match";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 9:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
      break;
    default:
      throw new Error("Month index must be in 1-12!");
  }
  return month;
}
export function squareInSircle(square, circle) {
  const squareSide = Math.sqrt(square);
  const circleDiameter = circle / Math.PI;

  if (circleDiameter < squareSide) {
    return true;
  }
  return false;
}
