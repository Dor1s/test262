var iter = function*() {}();
iter.next();
var callCount = 0;
var C = class {
  async *method([,]) {
    
    callCount = callCount + 1;
  }
};
new C().method(iter).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);