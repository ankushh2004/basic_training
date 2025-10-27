async function retryPromise(fn, retries, delay = 100) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === retries) {
        console.error("retry limit reached!: ", err);
      }

      const delayTime = delay * Math.pow(2, attempt); //exponentially increasing delay
      console.log(
        `Attempt ${attempt + 1} failed. Retring in ${delayTime}ms...`
      );
      await new Promise((response) => setTimeout(response, delayTime));
    }
  }
}

let attempt = 0;
const samplePromise = async () => {
  attempt++;
  console.log(`Running task (attempt #${attempt})...`);
  //   if (attempt > 5) {
  throw "Task failed";
  //   } else {
  // return `Task succeeded on attempt: ${attempt}`;
  //   }
};

retryPromise(samplePromise, 3, 1000)
  .then((result) => console.log("Final result: ", result))
  .catch((err) => console.log("Final error: ", err));
