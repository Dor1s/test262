var callCount = 0;
class C {
  static async method(_ = (function() { throw new Test262Error(); }())) {
    
    callCount = callCount + 1;
  }
}
C.method()
  .then(_ => {
    throw new Test262Error('function should not be resolved');
  }, error => assert.sameValue(error.constructor, Test262Error))
  .then(() => {
    assert.sameValue(callCount, 0, 'function body is not evaluated');
  }, $DONE)
  .then($DONE, $DONE);