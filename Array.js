function MinMax(array) {
  var max = array[0];
  var min = array[0];
  for (i of array) {
    if (max < i) {
      max = i;
    }
    if (min > i) {
      min = i;
    }
  }
  return { max, min };
}
//console.log(MinMax([10, 30, 70, 90, 97, -1]));

function SumOfArr(array) {
  return array.reduce((sum, a) => sum + a, 0);
}
//console.log(SumOfArr([10, -1, 2, 6]));

function removeDup(array) {
  return [...new Set(array)];
}
//console.log(removeDup([10, -1, 2, 6, 2]));

function CountOcc(array) {
  var result = {};
  for (i of array) {
    if (result[i]) {
      result[i]++;
    } else {
      result[i] = 1;
    }
  }
  return result;
}
//console.log(CountOcc([10, -1, 2, 6, 2]));

function RevArr(array) {
  return array.reverse();
}
//console.log(RevArr([10, -1, 2, 6, 2]));

function MergeArr(array1, array2) {
  return [...array1, ...array2];
}
//console.log(MergeArr([10, -1, 2, 6, 2], [90, 78]));

//==================
// medium
//==================
// function that return indices of target value if not than return -1
function TwoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return { i, j };
      }
    }
  }
  return -1;
}

//console.log(TwoSum([1, 2, 3, 9], 5));

// Moves zeros at end of array
function MoveZero(array) {
  var numArray = [];
  var zeroArray = [];
  for (i of array) {
    if (i == 0) {
      zeroArray.push(i);
    } else {
      numArray.push(i);
    }
  }
  return [...numArray, ...zeroArray];
}
//console.log(MoveZero([0, 1, 0, 4, 5, 6, 0, 7, 0]));

function MoveZero2(array) {
  return [...array.filter((x) => x !== 0), ...array.filter((x) => x == 0)];
}
//console.log(MoveZero2([0, 1, 0, 4, 5, 6, 0, 7, 0]));

// Given an integer array arr[], find the subarray (containing at least one element) which has the maximum possible sum, and return that sum.
// Note: A subarray is a continuous part of an array.
// currentSum = max(arr[i], currentSum + arr[i])
// maxSum = max(maxSum, currentSum)
function kadaneAlgo(array) {
  var currentSum = array[0];
  var maxSum = array[0];
  for (i = 1; i <= array.length - 1; i++) {
    currentSum = Math.max(array[i] + currentSum, array[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
//console.log(kadaneAlgo([-6, 9, 10, 2, -23]));

function rotateArr(array, k) {
  var splitted = array.slice(k);
  var remain = array.slice(0, k);
  return [...splitted, ...remain];
}
//console.log(rotateArr([1, 3, 4, 7, 8], 1));

function rotateArr2(array, k) {
  var result = [];
  for (i = k; i < array.length; i++) {
    result.push(array[i]);
  }
  for (i = 0; i <= k - 1; i++) {
    result.push(array[i]);
  }
  return result;
}
//console.log(rotateArr2([1, 2, 3, 5], 2));

function RotateArray3(array, k) {
  var copy = array.slice();
  for (i = 0; i <= k - 1; i++) {
    array.shift(i);
  }
  for (i = 0; i <= k - 1; i++) {
    array.push(copy[i]);
  }
  //console.log(array);
}
RotateArray3([1, 2, 3, 5], 2);

//FIND MISSING
function MissingNumber(array) {
  var result = [...new Set(array.sort())];
  for (i = 0; i <= result.length - 1; i++) {
    if (result[i + 1] != result[i] + 1) {
      return result[i] + 1;
    }
  }
}
//console.log(MissingNumber([1, 2, 2, 4, 6]));

//Majority element
function MajorityElement(array) {
  var result = {};
  for (let i of array) {
    if (result[i]) {
      result[i] = result[i] + 1;
    } else {
      result[i] = 1;
    }
  }
  var max = [];
  for (let key in result) {
    if (result[key] >= array.length / 2) {
      max.push(Number(key));
    }
  }
  return max;
}
//console.log(MajorityElement([6, 6, 6, 6, 7, 7, 87]));

// sort color dutch nation flag problem
function sortArray(array) {
  for (i = 0; i <= array.length - 1; i++) {
    for (j = i + 1; j <= array.length - 1; j++) {
      if (array[i] > array[j]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}
//console.log(sortArray([12, 55, 9]));

//BUY SELL STOCK
function BuySell(array) {
  let maxProfit = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = i + 1; j <= array.length - 1; j++) {
      maxProfit = Math.max(maxProfit, array[j] - array[i]);
    }
  }
  return maxProfit;
}
console.log(BuySell([7, 6, 4, 3, 1]));

console.log([3, 6, 5].valueOf());
