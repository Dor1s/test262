let nextCount = 0;
let returnCount = 0;
let x;
let iterator = {
  next() {
    nextCount += 1;
    if (nextCount === 2) {
      throw new Test262Error();
    }
    // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations
    return { done: nextCount > 10 };
  },
  return() {
    returnCount += 1;
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
let iter = fn();
iter.next().then(() => {
  iter.next().then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
    assert.sameValue(nextCount, 2);
    assert.sameValue(returnCount, 0);
    assert.sameValue(constructor, Test262Error);
  }).then($DONE, $DONE);
}, $DONE);