var initCount = 0;
var callCount = 0;
var obj = {
  async *method([[] = function() { initCount += 1; }()]) {
    assert.sameValue(initCount, 0);
    callCount = callCount + 1;
  }
};
obj.method([[23]]).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);