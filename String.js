let strings = "ajay tarapara";
//COUNT VOWELS
function countVowels(string) {
  let vowelContainer = "aeiouAEIOU";
  let count = 0;
  for (let i of string) {
    if (vowelContainer.includes(i)) {
      count++;
    }
  }
  return count;
}
//console.log(countVowels("dog barks"));

//Anagram
function Anagram(source, target) {
  if (source.length !== target.length) return false;
  var frequency = {};
  var frequency2 = {};
  for (let i of source) {
    if (frequency[i]) {
      frequency[i] = frequency[i] + 1;
    } else {
      frequency[i] = 1;
    }
  }
  for (let i of target) {
    if (frequency2[i]) {
      frequency2[i] = frequency2[i] + 1;
    } else {
      frequency2[i] = 1;
    }
  }
  for (let key in frequency2) {
    if (frequency[key] != frequency2[key]) {
      return false;
    }
  }
  return true;
}

function Anagram2(source, target) {
  var sourceArray = source.split("").sort();
  var targetArray = target.split("").sort();
  return Boolean(sourceArray.join("") == targetArray.join(""));
}

//console.log(Anagram2("ajay", "JHFDGJH"));

function charFreq(string) {
  var result = {};
  for (i of string) {
    if (result[i]) {
      result[i] = result[i] + 1;
    } else {
      result[i] = 1;
    }
  }
  return result;
}
//console.log(charFreq("ka &k"));

function subs(string) {
  var result = [];
  var nonRe = [];
  var maxLengthWord = "";
  for (i = 0; i <= string.length - 1; i++) {
    for (j = i; j <= string.length - 1; j++) {
      result.push(string.slice(i, j + 1));
    }
  }
  for (let sub of result) {
    let tempStr = "";
    let isUnique = true;

    for (let ch of sub) {
      if (tempStr.includes(ch)) {
        isUnique = false;
        break;
      } else {
        tempStr += ch;
      }
    }

    if (isUnique) {
      nonRe.push(sub);
    }
  }
  for (let i of nonRe) {
    if (i.length > maxLengthWord.length) {
      maxLengthWord = i;
    }
  }

  return maxLengthWord.length;
}

//console.log(subs("abcdefabcbb"));

// Compress String
function compressString(string) {
  var result = "";
  var prevCh = "";
  var Count = 1;
  for (i = 0; i <= string.length - 1; i++) {
    if (string[i] == prevCh) {
      Count++;
    }
    if (prevCh == "") {
      prevCh = string[i];
    }
    if (string[i] != string[i + 1]) {
      result += Count.toString() + prevCh;
      prevCh = "";
      Count = 1;
    }
  }
  return result;
}
//console.log(compressString("heeeeelllllloooooo"));

//Valid parentheses
function validationOfParenthesis(storedLastElement, compareElement) {
  if (storedLastElement === "{" && compareElement === "}") {
    return true;
  } else if (storedLastElement === "[" && compareElement === "]") {
    return true;
  } else if (storedLastElement === "(" && compareElement === ")") {
    return true;
  } else return false;
}

// done by dhruvik
function ValidParentheses(parentheses) {
  const startingPar = ["{", "(", "["];
  const endingPar = ["}", ")", "]"];
  let temp = "";
  for (i of parentheses) {
    if (!startingPar.includes(i) && !endingPar.includes(i)) {
      return false;
    } else if (startingPar.includes(i)) {
      temp += i;
    } else if (endingPar.includes(i)) {
      const checkVal = validationOfParenthesis(temp[temp.length - 1], i);
      if (checkVal) temp = temp.slice(0, temp.length - 1);
      else return false;
    }
  }
  return temp.length === 0;
}

// console.log("hello", ValidParentheses("{{()}}"));

// console.log(ValidParentheses("{{}}")); // true
// console.log(ValidParentheses("{[()]}")); // true
// console.log(ValidParentheses("{[(])}")); // false
// console.log(ValidParentheses("{{}")); // false
// done by dhruvik
//remove zero from array
function removeZero([head, ...rest]) {
  if (head === undefined) return [];
  if (head === 0) return [...removeZero([...rest])];
  else return [head, ...removeZero([...rest])];
}

//console.log("hello", removeZero([0, 12, 3, 4, 0]));

function validParentheses(string) {
  let container = { "{": "}", "[": "]", "(": ")" };
  let tempChar = [];
  for (let i of string) {
    if (i in container) {
      tempChar.push(i);
    } else {
      let lastChOfT = tempChar[tempChar.length - 1];
      if (container[lastChOfT] == i) {
        tempChar.pop();
      } else {
        return false;
      }
    }
  }
  return tempChar.length == 0;
}

function cmpStr(string) {
  var result = "";
  var tempChar = "";
  var tempCount = 0;
  for (i = 0; i <= string.length - 1; i++) {
    if (string[i] !== tempChar && tempChar == "") {
      tempChar = string[i];
      tempCount++;
    }
    if (string[i] != string[i + 1]) {
      result += tempCount.toString() + string[i];
      tempCount = 0;
      tempChar = "";
    }
    if (string[i] == string[i + 1]) {
      tempCount++;
    }
  }
  return result;
}
console.log(cmpStr("kkrr"));

function gcd(num1, num2) {
  var factor1 = [];
  var factor2 = [];
  var common = [];
  for (i = 0; i <= num1; i++) {
    if (num1 % i == 0) {
      factor1.push(i);
    }
  }
  for (i = 0; i <= num2; i++) {
    if (num2 % i == 0) {
      factor2.push(i);
    }
  }
  for (i of factor1) {
    if (factor2.includes(i)) {
      common.push(i);
    }
  }
  return common[common.length - 1];
}
console.log(gcd(55, 77));

const a = [0, 1, 3, 9, 7, 0];
let c = ([...b] = [...a]);
const n = 2;

console.log(c.splice(n));
console.log(b.splice(0, n));
