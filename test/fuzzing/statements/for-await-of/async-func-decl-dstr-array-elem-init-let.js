let x;
let iterCount = 0;
async function fn() {
  for await ([ x = y ] of [[]]) {
    
    iterCount += 1;
  }
}
let promise = fn();
promise.then(() => $DONE('Promise incorrectly fulfilled.'), ({ constructor }) => {
  assert.sameValue(constructor, ReferenceError);
}).then($DONE, $DONE);
let y;