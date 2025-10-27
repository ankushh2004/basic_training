function mySetInterval(fn, delay) {
  let id;
  function repeatFunction() {
    fn();
    id = setTimeout(repeatFunction, delay);
  }
  id = setTimeout(repeatFunction, delay);
  return {
    clear: () => clearTimeout(id),
  };
}

mySetInterval(() => console.log("Hello world!"), 1000);

setTimeout(() => mySetInterval.clear(), 10000);
