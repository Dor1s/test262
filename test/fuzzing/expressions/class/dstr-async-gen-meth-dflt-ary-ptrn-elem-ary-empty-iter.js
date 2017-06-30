var initCount = 0;
var callCount = 0;
var C = class {
  async *method([[] = function() { initCount += 1; }()] = [[23]]) {
    assert.sameValue(initCount, 0);
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);