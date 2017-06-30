let nextCount = 0;
let x;
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
  for await ([ x , ...{}[yield] ] of [iterable]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.return().then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(nextCount, 1);
  assert.sameValue(constructor, Test262Error);
}).then($DONE, $DONE);