const filterByType = <T>(
  arr: unknown[],
  type: "string" | "number" | "boolean" | "object"
): T[] => {
  return arr.filter((item): item is T => typeof item === type && item != null);
};

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
