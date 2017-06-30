let iterable = {
  [Symbol.iterator]() {
    throw new Test262Error();
  }
};
let x;
let iterCount = 0;
async function * fn() {
  for await ([ x , ] of [iterable
]) {
    
    iterCount += 1;
  }
}
let iter = fn();
iter.return().then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(iterCount, 0);
  assert.sameValue(constructor, Test262Error);
}).then($DONE, $DONE);