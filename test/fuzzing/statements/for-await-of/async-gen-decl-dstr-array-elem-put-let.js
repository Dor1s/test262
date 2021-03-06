let iterCount = 0;
async function * fn() {
  for await ([ x ] of [[]]) {
    
    iterCount += 1;
  }
}
let promise = fn().next();
promise.then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(iterCount, 0);
  assert.sameValue(constructor, ReferenceError);
}).then($DONE, $DONE);
let x;