//jshint esversion: 6

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = n => {
  //your code goes here
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    result = `${result}Not`;
  }
  //add if not divisible by those = "Not"
  return result;
};

let findAllbitBatBotOrNots1 = arr => {
  //use map method
  let newArr = arr.map(x => x.toString() + ": " + bitBatBotOrNot(arr[x - 1]));
  return newArr;
};

let findAllbitBatBotOrNots11 = arr => {
  let arr2 = [];
  arr.map(x => {
    arr2.push(`${x}: ${bitBatBotOrNot(arr[x])}`);
  });
  return arr2;
};

let findAllbitBatBotOrNots2 = arr => {
  //use for statement
  let newArr2 = [];
  for (var i = 0; i < arr.length; i++) {
    let count = newArr2.push(`${arr[i]}: ${bitBatBotOrNot(arr[i])}`);
  }
  return newArr2;
};

let findAllbitBatBotOrNots3 = arr => {
  //use for..of statement
  let newArr3 = [];
  for (let i of arr) {
    let update = newArr3.push(`${arr[i - 1]}: ${bitBatBotOrNot(arr[i - 1])}`);
  }
  return newArr3;
};

let findAllbitBatBotOrNots4 = arr => {
  //use forEach method
  let newArr4 = [];
  arr.forEach(num => {
    let update = newArr4.push(`${num}: ${bitBatBotOrNot(num)}`);
  });
  return newArr4;
};

let findAllbitBatBotOrNotsXC = arr => {
  let newArr5 = [];

  for (let num in arr) {
    newArr5.push(`${arr[num]}: ${bitBatBotOrNot(arr[num])}`);
  }
  return newArr5;
};
//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);

findAllbitBatBotOrNotsXC(arrOf1To100);
