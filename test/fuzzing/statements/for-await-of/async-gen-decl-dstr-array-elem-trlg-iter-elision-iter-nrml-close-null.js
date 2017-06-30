let x;
let nextCount = 0;
let iterator = {
  next() {
    nextCount += 1;
    // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations
    return { done: nextCount > 10 };
  },
  return() {
    return null;
  }
};
let iterable = {
  [Symbol.iterator]() {
    return iterator;
  }
};
let iterCount = 0;
async function * fn() {
  for await ([ x , , ] of [iterable]) {
    
    iterCount += 1;
  }
}
let promise = fn().next();