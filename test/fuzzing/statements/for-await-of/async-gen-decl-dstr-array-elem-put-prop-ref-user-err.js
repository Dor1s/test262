let x = {
  set y(val) {
    throw new Test262Error();
  }
};
let iterCount = 0;
async function * fn() {
  for await ([x.y] of [[23]
]) {
    
    iterCount += 1;
  }
}
let promise = fn().next();
promise.then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(iterCount, 0);
  assert.sameValue(constructor, Test262Error);
}).then($DONE, $DONE);