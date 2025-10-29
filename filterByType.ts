function filterByType<T extends string | number | boolean | object>(
  arr: unknown[],
  type: "string" | "number" | "boolean" | "object"
): T[] {

  // Type Guard Function
  function isType(value: unknown): value is T {
    switch (type) {
      case "string":
        return typeof value === "string";
      case "number":
        return typeof value === "number";
      case "boolean":
        return typeof value === "boolean";
      case "object":
        return typeof value === "object" && value !== null;
    }
  }

  return arr.filter(isType);
}

// Test Array
const array = [
  "hello",
  21,
  true,
  "world",
  false,
  2,
  { name: "Ankush", age: 21 },
  2004,
  { name: "Anish", age: 22 },
];

const strings = filterByType<string>(array, "string");
const objects = filterByType<object>(array, "object");
const numbers = filterByType<number>(array, "number");
const booleans = filterByType<boolean>(array, "boolean");

console.log("Strings[]: ", strings);
console.log("Objects[]: ", objects);
console.log("Numbers[]: ", numbers);
console.log("Booleans[]: ", booleans);
