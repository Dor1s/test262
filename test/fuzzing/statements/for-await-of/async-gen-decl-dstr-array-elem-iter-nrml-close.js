let nextCount = 0;
let returnCount = 0;
let thisValue = null;
let args = null;
let _;
let iterable = {};
let iterator = {
  next() {
    nextCount += 1;
    // Set an upper-bound to limit unnecessary iteration in non-conformant
    // implementations
    return { done: nextCount > 10 };
  },
  return() {
    returnCount += 1;
    thisValue = this;
    args = arguments;
    return {};
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};
let iterCount = 0;
async function * fn() {
  for await ([ _ ] of [iterable]) {
    assert.sameValue(nextCount, 1);
    assert.sameValue(returnCount, 1);
    assert.sameValue(thisValue, iterator, 'correct `this` value');
    assert(!!args, 'arguments object provided');
    assert.sameValue(args.length, 0, 'zero arguments specified');
    iterCount += 1;
  }
}
let promise = fn().next();
promise
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);