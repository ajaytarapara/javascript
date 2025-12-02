// factorial
function facto(number) {
  if (number == 1) {
    return 1;
  } else {
    return number * facto(number - 1);
  }
}
// console.log(facto(5));

// sum of digit
function sumOfDigit(number) {
  if (number == 0) {
    return 0;
  } else {
    return (number % 10) + sumOfDigit(Math.floor(number / 10));
  }
}
// console.log(sumOfDigit(340));

function sumOfDigit(number) {
  let str = number.toString();
  if (str.length === 0) {
    return 0;
  } else {
    return Number(str[0]) + sumOfDigit(str.slice(1));
  }
}
// console.log(sumOfDigit(456));

function sodigiU(number) {
  let str = number.toString().split("");
  return str.reduce((sum, ch) => {
    sum += Number(ch);
    return sum;
  }, 0);
}
// console.log(sodigiU(4564));

// fibonacci

function fibonacci(dept) {
  let arr = [0, 1];
  for (i = 0; i <= dept - 2; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  }
  return arr;
}

let fibInit = [0, 1];
function fibRecur(dept) {
  if (dept == 2) {
    return fibInit;
  } else {
    fibInit.push(fibInit[fibInit.length - 1] + fibInit[fibInit.length - 2]);
    return fibRecur(dept - 1);
  }
}
// console.log(fibRecur(7));

function permutation(stringInput) {
  let result = [];
  if (stringInput.length == 0) {
    return [];
  }
  if (stringInput.length === 1) {
    return [stringInput];
  }
  for (let i = 0; i < stringInput.length; i++) {
    let tempChar = stringInput[i];
    let stringTemp = "";
    for (let j = 0; j < stringInput.length; j++) {
      if (j != i) stringTemp += stringInput[j];
    }
    let permuting = permutation(stringTemp);
    for (let k of permuting) {
      result.push(tempChar + k);
    }
  }
  return result;
}
console.log(permutation("urmi"));

function per(inputString) {
  let result = [""];
  for (let char of inputString) {
    let temp = [];
    for (let fact of result) {
      for (k = 0; k <= fact.length; k++) {
        temp.push(fact.slice(0, k) + char + fact.slice(k));
      }
    }
    result = temp;
  }
  return result;
}
console.log(per("aj"));

function subStr(string) {
  let result = [];
  for (i = 0; i <= string.length - 1; i++) {
    let currentChar = "";
    for (j = i; j <= string.length - 1; j++) {
      currentChar += string[j];
      result.push(currentChar);
    }
  }
  return result;
}
console.log(subStr("abc"));

//tower of hanoi

function TowerOfHanoi(noOfRing, source, aux, destination) {
  if (noOfRing == 1) {
    return [`rin goes ${source} to ${destination}`];
  }
  let st1 = TowerOfHanoi(noOfRing - 1, source, destination, aux);
  let st2 = [`rin goes ${source} to ${destination}`];
  let st3 = TowerOfHanoi(noOfRing - 1, aux, source, destination);
  return [...st1, ...st2, ...st3];
}
console.log(TowerOfHanoi(2, "A", "B", "C"));
