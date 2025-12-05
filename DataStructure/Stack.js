function CreateStack() {
  let result = [];
  return {
    push(values) {
      result.push(values);
    },
    pop() {
      if (result.length === 0) {
        console.log("underflow");
        return;
      }
      return result.pop();
    },
    peek() {
      if (result.length === 0) {
        console.log("underflow");
        return;
      }
      return result[result.length - 1];
    },
    isEmpty() {
      console.log(result.length == 0 ? true : false);
    },
    size() {
      console.log(result.length);
    },
    values() {
      console.log(result);
    },
  };
}

// Valid parentheses
function checkValidPara(stringInput) {
  let starting = ["[", "{", "("];
  let ending = ["]", "}", ")"];
  let stack = CreateStack();
  for (i = 0; i <= stringInput.length - 1; i++) {
    let ch = stringInput[i];
    if (starting.includes(ch)) {
      stack.push(ch);
    } else {
      if (stack.peek() == undefined) return false;
      if (ending.includes(ch)) {
        let top = stack.peek();
        if (starting.indexOf(top) == ending.indexOf(ch)) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }

  return stack.peek() === undefined;
}
console.log(checkValidPara("{[]}]"));

function MinStack() {
  let stack = [];
  let minStack = [];

  return {
    push(value) {
      stack.push(value);
      if (minStack.length === 0 || value <= minStack[minStack.length - 1]) {
        minStack.push(value);
      }
    },

    pop() {
      if (stack.length === 0) return "stack underflow";
      let poppedVal = stack.pop();
      if (poppedVal === minStack[minStack.length - 1]) {
        minStack.pop();
      }
      return poppedVal;
    },

    peek() {
      return stack[stack.length - 1];
    },

    getMin() {
      if (minStack.length === 0) return undefined;
      return minStack[minStack.length - 1];
    },

    isEmpty() {
      return stack.length === 0;
    },

    values() {
      return [...stack];
    },
  };
}

let s = MinStack();

s.push(5); // stack: [5], min: 5
console.log("min stacckkk", s.getMin());
s.push(3); // stack: [5,3], min: 3
console.log("min stacckkk", s.getMin());
s.push(4); // stack: [5,3,4], min: 3
console.log("min stacckkk", s.getMin());
console.log(s.peek()); // 4
console.log(s.getMin()); // 3

s.pop(); // removes 4
console.log(s.getMin()); // 3
console.log("min stacckkk", s.getMin());
s.pop(); // removes 3
console.log(s.getMin()); // 5
console.log("min stacckkk", s.getMin());
console.log(s.isEmpty()); // false
s.pop(); // removes 5
console.log(s.isEmpty()); // true
console.log(s.getMin()); // undefined

//using class stack
class CLStack {
  constructor() {
    this.item = [];
  }
  push(value) {
    this.item.push(value);
  }
  pop() {
    if (this.item.length == 0) console.log("stack underflow");
    this.item.pop();
  }
  isEmpty() {
    console.log(this.item.length === 0);
  }
  peek() {
    if (this.item.length == 0) return -1;
    return this.item[this.item.length - 1];
  }
  print() {
    console.log(this.item);
  }
}
let classStack = new CLStack();
classStack.print();
classStack.push(4);
classStack.push(5);
classStack.push(6);
classStack.print();
classStack.pop();
classStack.print();
classStack.pop();
classStack.pop();
classStack.pop();
classStack.isEmpty();

class CLMinStack {
  constructor() {
    this.item = [];
    this.minValues = [];
  }
  push(values) {
    if (this.getMin() > values) {
      this.minValues.push(values);
    }
    this.item.push(values);
  }
  getMin() {
    return this.minValues[this.minValues.length - 1];
  }
  pop() {
    if (this.item.length == 0) console.log("stack underflow");
    let tempValue = this.item.pop();
    if (tempValue == this.getMin()) {
      this.minValues.pop();
    }
  }
  print() {
    console.log(this.item);
    console.log(this.minValues);
  }
}

// stack using queue
