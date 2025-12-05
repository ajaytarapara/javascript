//Implement queue using array
function QueueArray() {
  let queue = [];
  return {
    enqueue(value) {
      queue.push(value);
    },
    dequeue() {
      if (queue.length == 0) return "queue underflow";
      return queue.shift();
    },
    peek() {
      return queue[0];
    },
    clear() {
      queue = [];
    },
    print() {
      return queue;
    },
    size() {
      return queue.length;
    },
  };
}

let Queue = QueueArray();
// Queue.enqueue(5);
// Queue.enqueue(7);
// Queue.enqueue(3);
// Queue.print();
// Queue.dequeue();
// Queue.print();

function CircularQueue(size = 4) {
  let CircularQueue = [];
  for (i = 0; i < size; i++) {
    CircularQueue.push("");
  }
  let elementCount = 0;
  let front = 0;
  let rear = -1;

  return {
    enqueue(value) {
      if (elementCount == size) {
        console.log("queue overflow");
        return;
      }
      rear = (rear + 1) % size;
      CircularQueue[rear] = value;
      elementCount++;
    },
    dequeue() {
      if (elementCount == 0) {
        console.log("queue underflow");
        return;
      }
      let removed = CircularQueue[front];
      CircularQueue[front] = "";
      front = (front + 1) % size;
      elementCount--;

      return removed;
    },
    print() {
      console.log(CircularQueue);
    },
  };
}
CircularQueue();

let CircularQueueCon = CircularQueue(4);
// CircularQueueCon.enqueue(6);
// CircularQueueCon.enqueue(4);
// CircularQueueCon.enqueue(8);
// CircularQueueCon.enqueue(9);
// CircularQueueCon.print();
// CircularQueueCon.dequeue();
// CircularQueueCon.print();
// CircularQueueCon.enqueue(11);
// CircularQueueCon.print();
// CircularQueueCon.dequeue();
// CircularQueueCon.print();

//Sliding Window Maximum
function slidingWindow(array, k) {
  let result = [];
  for (i = 0; i <= array.length - k; i++) {
    result.push(Math.max(...array.slice(i, i + k)));
  }
  return result;
}
console.log(slidingWindow([1, 2, 3, 1, 4, 5, 2, 3, 6], 1));

// IMPLEMENT STACK USING QUEUE
function stackDoubleQueue() {
  let queue1 = QueueArray();
  let queue2 = QueueArray();
  return {
    print() {
      console.log(queue1.print());
    },
    push(value) {
      if (queue1.size() == 0 && queue2.size() == 0) {
        queue1.enqueue(value);
      } else {
        // queue doing empty
        for (i = 0; i <= queue1.size(); i++) {
          let temp = queue1.dequeue();
          queue2.enqueue(temp);
        }
        //adding new value
        queue1.enqueue(value);
        //queue filling again
        for (j = 0; j <= queue2.size(); j++) {
          let temp = queue2.dequeue();
          queue1.enqueue(temp);
        }
      }
    },
    pop() {
      if (queue1.size() == 0) console.log("stack underflow");
      queue1.dequeue();
    },
    peek() {
      console.log(queue1.peek());
      return queue1.peek();
    },
  };
}

let stackQueue = stackDoubleQueue();
stackQueue.push(5);
stackQueue.push(6);
stackQueue.peek();
stackQueue.push(7);
stackQueue.print();
stackQueue.pop();
stackQueue.print();
stackQueue.pop();

// 2 ND METHOD STACK USING DOUBLE QUEUE

function StackUsingDoubleQueue2() {
  let queue1 = []; //main queue
  let queue2 = []; // temp
  return {
    push(value) {
      if ((queue1.length == 0) & (queue2.length == 0)) {
        queue1.push(value);
      } else {
        let lengthQ1 = queue1.length - 1;
        for (i = 0; i <= lengthQ1; i++) {
          let temp = queue1.pop();
          queue2.push(temp);
        }
        queue1.push(value);
        let lengthQ2 = queue2.length - 1;
        for (j = 0; j <= lengthQ2; j++) {
          let temp = queue2.pop();
          queue1.push(temp);
        }
      }
    },
    print() {
      console.log(queue1);
    },
    pop() {
      return queue1.shift();
    },
  };
}
let tt = StackUsingDoubleQueue2();
tt.push(2);
tt.push(3);
tt.push(4);
tt.print();
tt.pop();
tt.print();
tt.push(6);
tt.print();
tt.pop();
tt.print();


