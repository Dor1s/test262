throw "Test262: This statement should not be evaluated.";
var iterCount = 0;
async function *fn() {
  for await (var [...[ x ] = []] of [[]]) {
    
    iterCount += 1;
  }
}
fn().next()
  .then(() => assert.sameValue(iterCount, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);