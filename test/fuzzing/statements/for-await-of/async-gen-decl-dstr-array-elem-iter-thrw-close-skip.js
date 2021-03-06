let nextCount = 0;
let returnCount = 0;
let iterator = {
  next() {
    nextCount += 1;
    throw new Test262Error();
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
let _;
let iterCount = 0;
async function * fn() {
  for await ([ x ] of [iterable]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(nextCount, 1);
  assert.sameValue(returnCount, 0);
}).then($DONE, $DONE);