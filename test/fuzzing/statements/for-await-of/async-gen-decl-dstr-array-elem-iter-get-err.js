let iterable = {
  [Symbol.iterator]() {
    throw new Test262Error();
  }
};
let _;
let iterCount = 0;
async function * fn() {
  for await ([ _ ] of [iterable]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(constructor, Test262Error);
}).then($DONE, $DONE);