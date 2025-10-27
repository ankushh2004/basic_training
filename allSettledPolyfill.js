async function allSettled(promises) {
  const results = [];

  for (let promise of promises) {
    try {
      const ans = await promise;
      results.push({ status: "fulfilled", value: ans });
    } catch (err) {
      results.push({ status: "rejected", reason: err });
    }
  }
  return results;
}

// sample promise
const promises = [
  Promise.resolve("Hey, what's up!"),
  Promise.reject("WRONG ENTRY"),
];

allSettled(promises).then((results) => console.log("Results:", results));
