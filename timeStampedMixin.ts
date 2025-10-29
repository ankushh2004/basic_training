type Constructor<T = {}> = new (...args: any[]) => T;

function timeStampedMixin<T extends Constructor>(Base: T) {
  return class extends Base {
    createdAt: Date;
    updatedAt: Date;

    constructor(...args: any[]) {
      super(...args);
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }

    updateTime() {
      this.updatedAt = new Date();
    }
  };
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const User = timeStampedMixin(Person);
const user1 = new User("Rahul");

console.log("Username: ", user1.name);
console.log("Created at: ", user1.createdAt);
console.log("Updated at: ", user1.updatedAt);

// Updating user
setTimeout(() => {
  user1.name = "Ankush";
  user1.updateTime();
  console.log(`Username: ${user1.name} updated at ${user1.updatedAt}`);
}, 2000);
