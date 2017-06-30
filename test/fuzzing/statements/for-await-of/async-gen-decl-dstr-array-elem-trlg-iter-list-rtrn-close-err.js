let returnCount = 0;
let unreachable = 0;
let iterator = {
  return() {
    returnCount += 1;
    throw new Test262Error();
  }
};
let iterable = {
  [Symbol.iterator]() {
    return iterator;
  }
};
let iterCount = 0;
async function * fn() {
  for await ([ {}[yield] , ] of [iterable]) {
    unreachable += 1;
    iterCount += 1;
  }
}
let iter = fn();
iter.return().then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(returnCount, 1);
  assert.sameValue(unreachable, 0, 'Unreachable statement was not executed');
  assert.sameValue(constructor, Test262Error);
}).then($DONE, $DONE);