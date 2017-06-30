let unreachable = 0;
let iterator = {
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
  for await ([ {}[yield] ] of [iterable]) {
    unreachable += 1;
    iterCount += 1;
  }
}
let iter = fn();
iter.next().then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(unreachable, 0);
  assert.sameValue(constructor, TypeError);
}).then($DONE, $DONE);