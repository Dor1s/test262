var badIter = {};
var callCount = 0;
var spyValue = Object.defineProperty({ done: false }, 'value', {
  get: function() {
    callCount += 1;
  }
});
badIter[Symbol.iterator] = function() {
  return {
    next: function() {
      return { done: false };
    },
    return: function() {
      return spyValue;
    }
  };
};
var normalCompletion = false;
var errorCompletion = false;
var delegationComplete = false;
function* g() {
  try {
    yield * badIter;
    normalCompletion = true;
  } catch (_) {
    errorCompletion = true;
  } finally {
    delegationComplete = true;
  }
}
var iter = g();
iter.next();
assert.sameValue(callCount, 0, 'access count (first iteration)');
assert.sameValue(
  delegationComplete, false, 'delegation ongoing (first iteration)'
);
iter.return();
assert.sameValue(callCount, 0, 'access count (second iteration)');
assert.sameValue(
  delegationComplete, false, 'delegation ongoing (second iteration)'
);
spyValue.done = true;
iter.return();
assert.sameValue(callCount, 1, 'access count (final iteration)');
assert.sameValue(delegationComplete, true, 'delegation complete');
assert.sameValue(normalCompletion, false, 'completion was abrupt');
assert.sameValue(errorCompletion, false, 'completion was not of type "throw"');