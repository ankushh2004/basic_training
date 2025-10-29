function deepCopy(obj) {
  // case: primitives
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // case: Arrays
  if (Array.isArray(obj)) {
    const arr = [];
    for (let i = 0; i < obj.length; i++) {
      arr[i] = deepClone(obj[i]);
    }
    return arr;
  }

  // case: objects
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

// test case
const obj1 = { a: 1, b: 2 };
const copy1 = deepCopy(obj1);
console.log(copy1);
console.log(copy1 === obj1);

const obj2 = { user: { name: "Ankush", age: 21 } };
const copy2 = deepCopy(obj2);
console.log(copy2);
console.log(copy2.user === obj2.user);

const arr1 = [1, 2, 3];
const copyArr1 = deepCopy(arr1);
console.log(copyArr1); // [1, 2, 3]
console.log(copyArr1 === arr1);

const arr2 = [1, [2, 3], [4, [5]]];
const copyArr2 = deepCopy(arr2);
console.log(copyArr2);
console.log(copyArr2[1] === arr2[1]);
