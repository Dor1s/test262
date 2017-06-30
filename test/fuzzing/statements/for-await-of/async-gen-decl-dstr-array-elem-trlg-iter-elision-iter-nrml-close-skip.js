let nextCount = 0;
let returnCount = 0;
let x;
let iterator = {
  next() {
    nextCount += 1;
    return { done: nextCount > 1 };
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
    assert.sameValue(nextCount, 2);
    assert.sameValue(returnCount, 0);
    iterCount += 1;
  }
}
let iter = fn();
iter.next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);