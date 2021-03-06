let nextCount = 0;
let returnCount = 0;
let thisValue = null;
let args = null;
let iterator = {
  next() {
    nextCount += 1;
    return { done: true };
  },
  return() {
    returnCount += 1;
    thisValue = this;
    args = arguments;
    return {};
  }
};
let iterable = {
  [Symbol.iterator]() {
    return iterator;
  }
};
let iterCount = 0;
async function * fn() {
  for await ([] of [iterable]) {
    assert.sameValue(nextCount, 0);
    assert.sameValue(returnCount, 1);
    assert.sameValue(thisValue, iterator, 'correct `this` value');
    assert(!!args, 'arguments object provided');
    assert.sameValue(args.length, 0, 'zero arguments specified');
    iterCount += 1;
  }
}
let iter = fn();
iter.next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);