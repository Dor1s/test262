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
  for await ([ {}[yield] , ] of [iterable]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.return().then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(iterCount, 0);
  assert.sameValue(constructor, TypeError);
}).then($DONE, $DONE);