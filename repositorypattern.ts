// Created discriminated union type for Error Handling
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };

// Creating User Interface
interface User {
  id: number;
  name: string;
  email: string;
}

// Creating abstract Repository
abstract class Repository<T> {
  abstract createUser(item: T): Promise<Result<T, Error>>;
  abstract findUser(id: number): Promise<Result<T, Error>>;
  abstract updateUser(id: number, item: T): Promise<Result<T, Error>>;
  abstract deleteUser(id: number): Promise<Result<null, Error>>;
}

// Creating UserRepository which implements the CRUD for the abstract class
class UserRepository extends Repository<User> {
  private users: User[] = [];

  async createUser(user: User): Promise<Result<User, Error>> {
    const checkExistingUser = this.users.some((u) => u.id === user.id);
    if (checkExistingUser)
      return { ok: false, error: new Error("User already exist!") };
    this.users.push(user);
    return { ok: true, value: user };
  }

  async findUser(id: number): Promise<Result<User, Error>> {
    const user = this.users.find((u) => u.id === id);
    if (!user) return { ok: false, error: new Error("User not found!") };
    return { ok: true, value: user };
  }

  async updateUser(id: number, user: User): Promise<Result<User, Error>> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return { ok: false, error: new Error("User not found!") };

    this.users[index] = user;
    return { ok: true, value: user };
  }

  async deleteUser(id: number): Promise<Result<null, Error>> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return { ok: false, error: new Error("User not found") };
    this.users.splice(index, 1);
    return { ok: true, value: null };
  }
}

// cases for testing
const obj = new UserRepository();
console.log(obj.createUser({ id: 1, name: "ankush", email: "abc@gmail.com" }));
console.log(obj.createUser({ id: 2, name: "aman", email: "xyz@gmail.com" }));

console.log(obj.findUser(3));

console.log(
  obj.updateUser(1, {
    id: 3,
    name: "Ankush",
    email: "a@abc",
  })
);

console.log(obj.deleteUser(2));
