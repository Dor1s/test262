var iter = function*() {}();
iter.next();
var iterCount = 0;
async function fn() {
  for await (let [,] of [iter]) {
    
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);