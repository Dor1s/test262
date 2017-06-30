var callCount = 0;
async function f(_ = (function() { throw new Test262Error(); }())) {
  
  callCount = callCount + 1;
}
f()
  .then(_ => {
    throw new Test262Error('function should not be resolved');
  }, error => assert.sameValue(error.constructor, Test262Error))
  .then(() => {
    assert.sameValue(callCount, 0, 'function body is not evaluated');
  }, $DONE)
  .then($DONE, $DONE);