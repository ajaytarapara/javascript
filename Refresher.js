function isPrime(number) {
  if (number == 1) {
    return true;
  } else {
    for (i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      } else {
        return true;
      }
    }
  }
}

console.log(isPrime(19));
console.log(isPrime(24));

function fibonacci(length) {
  var first = 0;
  var second = 1;
  var result = [first, second];
  for (i = 1; i <= length - 2; i++) {
    var next = first + second;
    result.push(next);
    first = second;
    second = next;
  }
  return result;
}
console.log(fibonacci(6));

//======================
// GCD
//======================

//USING SUBTRACTION
function GCD(num1, num2) {
  var max = Math.max(num1, num2);
  var min = Math.min(num1, num2);
  while (max != min) {
    let result = max - min;
    max = Math.max(min, result);
    min = Math.min(min, result);
  }
  return max;
}
console.log(GCD(77, 22));


//USING DIVISION
function divGCD(num1, num2) {
  var max = Math.max(num1, num2);
  var min = Math.min(num1, num2);
  let remainder;
  while (min !== 0) {
    remainder = max % min;
    max = min;
    min = remainder;
  }
  return max;
}
console.log(divGCD(100, 150));

//USING FACTOR
function primeFactor(num1, num2) {
  var factorNum1 = [];
  var factorNum2 = [];
  var commonFactor = [];
  for (i = 1; i <= num1; i++) {
    if (num1 % i == 0) {
      factorNum1.push(i);
    }
  }
  for (i = 1; i <= num2; i++) {
    if (num2 % i == 0) {
      factorNum2.push(i);
    }
  }
  for (i of factorNum1) {
    if (factorNum2.includes(i)) {
      commonFactor.push(i);
    }
  }
  return commonFactor[commonFactor.length - 1];
}
console.log(primeFactor(20, 50));
console.log(primeFactor(14, 43));

//======================
// LCM
//======================

//MULTIPLE
function multiLCM(num1, num2) {
  var multiplesNum1 = [];
  var multiplesNum2 = [];
  for (i = 1; i <= 100; i++) {
    multiplesNum1.push(num1 * i);
  }
  for (i = 1; i <= 100; i++) {
    multiplesNum2.push(num2 * i);
  }
  for (i of multiplesNum1) {
    if (multiplesNum2.includes(i)) {
      return i;
    }
  }
}
console.log(multiLCM(200, 100));

//count vowel
function CountVowel(string) {
  var vowel = "aeiouAEIOU";
  var count = 0;
  for (i of string) {
    if (vowel.includes(i)) {
      count++;
    }
  }
  return count;
}
console.log(CountVowel("Ajay"));

//squared numbers
function squaredNum(array) {
  return array.map((x) => x * x);
}
console.log(squaredNum([1, 4, 5]));

//reverse number

function numberReverse(number) {
  return number.toString().split("").reverse().join("");
}
console.log(numberReverse(123));

function Factorial(number) {
  var multi = 1;
  for (i = 1; i <= number; i++) {
    multi *= i;
  }
  return multi;
}
console.log(Factorial(5));

function Palindrome(string) {
  let reverseString = string.toLowerCase().split("").reverse().join("");
  if (string == reverseString) {
    return true;
  }
  return false;
}
console.log(Palindrome("tGT"));

function fact(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * fact(num - 1);
}
console.log(fact(5));


