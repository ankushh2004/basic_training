// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  let largest = -Infinity;
  let sLargest = -Infinity;
  for (let i of array) {
    if (i > largest) {
      sLargest = largest;
      largest = i;
    } else if (i > sLargest && i != largest) {
      sLargest = i;
    }
  }
  return sLargest;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  let frequency = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char >= "a" && char <= "z") {
      if (!frequency[char]) {
        frequency[char] = 0;
      }
      frequency[char]++;
    }
  }
  return frequency;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  const result = {};

  function helper(obj, parent) {
    for (let key in obj) {
      const newKey = parent ? `${parent}.${key}` : key;
      const value = obj[key];

      // Cases for value

      // when object
      if (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value)
      ) {
        helper(value, newKey);
      }
      //when array
      else if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          const arrKey = `${newKey}.${i}`;
          if (value[i] !== null && typeof value[i] === "object") {
            helper(value[i], arrKey);
          } else {
            result[arrKey] = value[i];
          }
        }
      }
      // when primitive type
      else {
        result[newKey] = value;
      }
    }
  }

  helper(unflatObject, "");
  return result;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  const result = {};

  for (let key in flatObject) {
    const keys = key.split(".");
    let current = result;

    for (let i = 0; i < keys.length; i++) {
      const part = keys[i];

      // if this is last key then assign it to current
      if (i === keys.length - 1) {
        current[part] = flatObject[key];
      } else {
        // when key current[part] not exist
        if (!current[part] || typeof current[part] !== "object") {
          current[part] = {};
        }

        // if current[part] already exists move it to that
        current = current[part];
      }
    }
  }
  return result;
}
