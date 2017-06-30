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
class C {
  method([x] = iter) {
    assert.sameValue(doneCallCount, 0);
    callCount = callCount + 1;
  }
};
new C().method();
assert.sameValue(callCount, 1, 'method invoked exactly once');