var initCount = 0;
var callCount = 0;
function f([[] = function() { initCount += 1; }()]) {
  assert.sameValue(initCount, 0);
  callCount = callCount + 1;
};
f([[23]]);
assert.sameValue(callCount, 1, 'function invoked exactly once');