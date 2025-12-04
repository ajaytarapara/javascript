// Linear
function linearS(array, target) {
  for (i = 0; i <= array.length - 1; i++) {
    if (array[i] == target) return i;
  }
  return -1;
}

//console.log(linearS([1, 3, 4, 7], 7));

//Binary
function BinaryS(array, target) {
  let start = 0;
  let end = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    if (start > end) break;
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

function recurBinary(
  array,
  target,
  start = 0,
  end = array.length - 1,
  mid = Math.floor(start + end) / 2
) {
  if (array[mid] == target) return mid;
  if (array[mid] > target) return recurBinary(array, target, start, mid - 1);
  if (array[mid] < target) return recurBinary(array, target, mid + 1);
  return -1;
}

//console.log(recurBinary([1, 3, 4, 7, 78, 100, 105], 666));

//FIRST AND LAST OCCURRENCE IN ARRAY
function firstAndLastOcc(array, target) {
  let result = { first: -1, last: -1 };
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] == target && result.first == -1) {
      result.first = i;
    }
    if (array[i] == target) {
      result.last = i;
    }
  }
  return result;
}
//console.log(firstAndLastOcc([1, 2, 3, 4, 3, 5, 1, 6, 8, 6], 5));

//bubble sort
function bubbleSort(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j <= array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
//console.log(bubbleSort([1, 4, 3, 2, -1, 0, 34, 12]));

// selection sort
function selectionSort(array) {
  for (i = 0; i <= array.length - 1; i++) {
    let minIndex = i;
    for (j = i + 1; j <= array.length - 1; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}
// console.log(selectionSort([3, -2, -7, 0, 67, 88, 85]));

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j;

    for (j = i - 1; j >= 0; j--) {
      if (array[j] > key) {
        array[j + 1] = array[j];
      } else {
        break;
      }
    }

    array[j + 1] = key;
  }

  return array;
}

//console.log(insertionSort(arr));

function ins(array) {
  for (i = 1; i <= array.length - 1; i++) {
    let key = array[i];
    for (j = i - 1; j >= 0; j--) {
      if (array[j] > key) {
        array[j + 1] = array[j];
        array[j] = key;
      } else {
        break;
      }
    }
  }
  return array;
}
//console.log(ins([2, -1, 0, -33]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

// Example
//console.log(mergeSort([5, 2, 9, 1, 5, 6]));

function mergeArraySort(leftPart, rightPart) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < leftPart.length && j < rightPart.length) {
    if (leftPart[i] <= rightPart[j]) {
      result.push(leftPart[i]);
      i++;
    } else {
      result.push(rightPart[j]);
      j++;
    }
  }

  return result.concat(leftPart.slice(i)).concat(rightPart.slice(j));
}

function mergeSort(array) {
  if (array.length == 1) {
    return array;
  }
  let left = 0;
  let right = array.length;
  let mid = Math.floor((left + right) / 2);
  let leftPart = mergeSort(array.slice(0, mid));
  let rightPart = mergeSort(array.slice(mid));
  return mergeArraySort(leftPart, rightPart);
}
// console.log(mergeSort([3, 5, 2, 1]));

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([3, 5, 2, 1, 9, 7]));
