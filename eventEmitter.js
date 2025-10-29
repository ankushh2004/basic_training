// on => for adding event
// emit => for triggering the event
// off => to remove the event
class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    // if event not existed then we assign an empty array
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      const listeners = this.events[event];
      for (let listener of listeners) {
        listener(...args);
      }
    } else {
      console.log("Event not found!");
    }
  }

  off(event, listener) {
    // if event is not present then only we can off listener
    if (!this.events[event]) {
      return "Event not found!";
    }
    if (!listener) {
      // if listener is not passed then we remove all the listeners
      delete this.events[event];
    } else {
      this.events[event] = this.events[event].filter((fn) => fn !== listener);
    }
  }
}

const emitter = new EventEmitter();

function sayHello(name) {
  console.log(`Hello ${name}, what's up!`);
}
emitter.on("hello", sayHello);
emitter.emit("hello", "Ankush");
emitter.off("hello");
emitter.emit("hello", "Ankush");