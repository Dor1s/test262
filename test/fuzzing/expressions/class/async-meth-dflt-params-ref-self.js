var x = 0;
var callCount = 0;
var C = class {
  async method(x = x) {
    
    callCount = callCount + 1;
  }
};
C.prototype.method()
  .then(_ => {
    throw new Test262Error('function should not be resolved');
  }, error => assert.sameValue(error.constructor, ReferenceError))
  .then(() => {
    assert.sameValue(callCount, 0, 'function body is not evaluated');
  }, $DONE)
  .then($DONE, $DONE);