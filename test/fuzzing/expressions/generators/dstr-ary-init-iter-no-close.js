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
var f;
f = function*([x]) {
  assert.sameValue(doneCallCount, 0);
  callCount = callCount + 1;
};
f(iter).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');