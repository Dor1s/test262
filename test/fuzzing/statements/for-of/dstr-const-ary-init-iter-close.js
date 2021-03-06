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
var iterCount = 0;
for (const [x] of [iter]) {
  assert.sameValue(doneCallCount, 1);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');