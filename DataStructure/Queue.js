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
      console.log(queue);
      return queue;
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
console.log(slidingWindow([1, 2, 3, 1, 4, 5, 2, 3, 6], 3));
