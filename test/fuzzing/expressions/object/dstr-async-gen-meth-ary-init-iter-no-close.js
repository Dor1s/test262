var doneCallCount = 0;
var iter = {};
iter[Symbol.iterator] = function() {
  return {
    next: function() {
      return { value: null, done: true };
    },
    return: function() {
      doneCallCount += 1;
      return {};
    }
  };
};
var callCount = 0;
var obj = {
  async *method([x]) {
    assert.sameValue(doneCallCount, 0);
    callCount = callCount + 1;
  }
};
obj.method(iter).next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);