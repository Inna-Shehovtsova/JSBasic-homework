//------------------------------------------------
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
//------------------------------------------------
// Homework 2
export function maximum(a, b) {
  return a > b ? a : b;
}
/** 2.Запросить у пользователя ввод числа от 1 до 12.
 * Вывести в консоль название месяца, соответствующее
 * этому числу (1 — январь, 2 — февраль и т.д.).
 * @param {index} индекс месяца  от 1 до 12.
 */
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

/** В переменных circle и square хранятся площади круга
 * и квадрата соответственно. Написать программу,
 * которая определяет, поместится ли круг в квадрат.
 * @param {square} площадь квадрата
 * @param {circle} площадь круга
 */
export function squareInSircle(square, circle) {
  const squareSide = Math.sqrt(square);
  const circleDiameter = circle / Math.PI;

  if (circleDiameter < squareSide) {
    return true;
  }
  return false;
}
//------------------------------------------------
// Homework 3
/** сумма всех целых чисел от 50 до 100
 */
export function sumFromAToB(a, b) {
  let sum1 = 0;
  for (let i = a; i <= b; i += 1) {
    sum1 += i;
  }
  return sum1;
}
/** таблица умножения на 7
 * */
export function mul7Show() {
  let ret = "";
  for (let i = 1; i < 10; i += 1) {
    ret += `7 x ${i} = ${i * 7} \n`;
  }
  return ret;
}
/** среднее арифметическое всех нечётных чисел от 1 до N.
 * @param {N} До какого числа складывать
 */
export function avgSumOdd(N) {
  let sum2 = 0;
  let count = 0;

  for (let i = 1; i <= N; i += 2) {
    sum2 = i + sum2;
    count += 1;
  }
  return sum2 / count;
}
//------------------------------------------------
// Homework 5

/**
 * сумму всех элементов массива
 * @param {arr} массив
 * @returns {sum}
 */
export function arrElSum(arr) {
  return arr.reduce((s, it) => s + it, 0);
}
/** новый массив на основе исходного, в
 * котором каждый элемент будет вдвое больше
 * (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
 * массив
 *  @param {arr} массив
 *  @returns {arr2}
 */
export function doubleArr(arr) {
  let arr2 = [].concat(arr);
  arr2 = arr2.map((el) => {
    const newVal = el * 2;
    return newVal;
  });
  return arr2;
}
/**
 * Найдите наибольший и наименьший элементы массива
 * @param arr массив
 * @returns   {'min':min, 'max':max}
 */
export function arrMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  arr.forEach((el) => {
    if (el < min) {
      min = el;
    }
    if (el > max) {
      max = el;
    }
  });
  return { min, max };
}
