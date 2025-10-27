async function runSequential(tasks) {
  const results = [];
  for (const task of tasks) {
    const result = await task();
    results.push(result);
  }
  return results;
}

const tasks = [
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 1 completed");
        resolve("Result from Task 1");
      }, 1000);
    }),
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 2 completed");
        resolve("Result from Task 2");
      }, 500);
    }),
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("Task 3 completed");
        resolve("Result from Task 3");
      }, 1500);
    }),
];

runSequential(tasks).then((res) => {
  console.log("Final results: ",res);
});
