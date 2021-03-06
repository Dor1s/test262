var doneCallCount = 0;
var iter = {};
iter[Symbol.iterator] = function() {
  return {
    next: function() {
      return { value: null, done: false };
    },
    return: function() {
      doneCallCount += 1;
      return {};
    }
  };
};
var callCount = 0;
var obj = {
  *method([x] = iter) {
    assert.sameValue(doneCallCount, 1);
    callCount = callCount + 1;
  }
};
obj.method().next();
assert.sameValue(callCount, 1, 'generator method invoked exactly once');