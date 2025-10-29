// Way 1: using reduce metthod
function compose1<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
  return (arg: T) => {
    return fns.reduceRight((acc, fn) => fn(acc), arg);
    // using reduceRight bcz we are executing fns from the right to left
  };
}

// Way 2: using loops
function compose2<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
  return (arg: T) => {
    let result= arg;
    for(let i= fns.length-1;i>=0;i--){
        const fn = fns[i];
        if (fn) {
          result = fn(result);
        }
    }
    return result;
  };
}


const addOne = (x: number) => x + 1;
const twice = (x: number) => 2 * x;
const subtract = (x: number) => x - 1;

const combined1 = compose1(addOne, twice, subtract);
const combined2 = compose1(addOne, twice, subtract);

console.log("Final Output using reduceRight: ",combined1(3)); 
console.log("Final Output using loops: ", combined2(3)); 