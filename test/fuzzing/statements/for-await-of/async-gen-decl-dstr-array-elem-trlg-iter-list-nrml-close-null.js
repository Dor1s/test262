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
  for await ([ x , ] of [iterable]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.return().then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(iterCount, 0);
  assert.sameValue(constructor, TypeError);
}).then($DONE, $DONE);