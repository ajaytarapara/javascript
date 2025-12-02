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

function ins(array) {
  for (i = 0; i < array.length - 1; i++) {
    let lastSort = 0;
    for (j = i + 1; j <= array.length - 1; j++) {
      if (array[lastSort] > array[j]) {
        
      }
    }
  }
}
