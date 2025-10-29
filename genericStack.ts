class genericStack<T> {
  private arr: T[];

  // Initializing empty array
  constructor() {
    this.arr = [];
  }

  push(element: T): void {
    this.arr.push(element);
    console.log(`Element: ${element} pushed in Stack!`);
  }
  pop(): T | undefined {
    return this.arr.pop();
  }
  peek(): T | undefined {
    return this.arr[this.arr.length - 1];
  }

  isEmpty(): boolean {
    return this.arr.length === 0;
  }

  size(): number {
    return this.arr.length;
  }

  print(): T[] {
    return this.arr;
  }
}

const stack = new genericStack<number>();
stack.push(5);
stack.push(7);
stack.push(1);
console.log(stack.print());
console.log("Peek element: ", stack.peek());
console.log("Popped element: ", stack.pop());
console.log(stack.print());
stack.push(11);
stack.push(100);
stack.push(23);
console.log(stack.print());
console.log("size of stack: ", stack.size());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.print());
console.log("size of stack: ", stack.size());
if (stack.isEmpty()) console.log("Stack is Empty!");
