throw "Test262: This statement should not be evaluated.";
var iterCount = 0;
async function fn() {
  for await (const [...{ x } = []] of [[]]) {
    
    iterCount += 1;
  }
}
fn()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);