var callCount = 0;
var ref;
ref = function*() {
  assert.sameValue(arguments.length, 2);
  assert.sameValue(arguments[0], 42);
  assert.sameValue(arguments[1], 'TC39');
  callCount = callCount + 1;
};
ref(42, 'TC39',).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');