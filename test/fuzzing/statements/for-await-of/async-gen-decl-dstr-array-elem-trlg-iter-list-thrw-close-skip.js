let nextCount = 0;
let returnCount = 0;
let iterable = {};
let thrower = function() {
  throw new Test262Error();
};
let iterator = {
  next() {
    nextCount += 1;
    throw new Test262Error();
  },
  return() {
    returnCount += 1;
  }
};
iterable[Symbol.iterator] = function() {
  return iterator;
};
let x;
let iterCount = 0;
async function * fn() {
  for await ([ x , ] of [iterable]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(nextCount, 1);
  assert.sameValue(returnCount, 0);
  assert.sameValue(iterCount, 0);
  assert.sameValue(constructor, Test262Error);
}).then($DONE, $DONE);