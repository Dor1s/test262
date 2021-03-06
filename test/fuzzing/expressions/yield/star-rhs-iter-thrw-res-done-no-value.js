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
    throw: function() {
      return spyValue;
    }
  };
};
var delegationComplete = false;
function* g() {
  yield * badIter;
  delegationComplete = true;
}
var iter = g();
iter.next();
assert.sameValue(callCount, 0, 'access count (first iteration)');
assert.sameValue(
  delegationComplete, false, 'delegation ongoing (first iteration)'
);
iter.throw();
assert.sameValue(callCount, 0, 'access count (second iteration)');
assert.sameValue(
  delegationComplete, false, 'delegation ongoing (second iteration)'
);
spyValue.done = true;
iter.throw();
assert.sameValue(callCount, 1, 'access count (final iteration)');
assert.sameValue(delegationComplete, true, 'delegation complete');