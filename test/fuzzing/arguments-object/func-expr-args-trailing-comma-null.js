var callCount = 0;
var ref;
ref = function() {
  assert.sameValue(arguments.length, 2);
  assert.sameValue(arguments[0], 42);
  assert.sameValue(arguments[1], null);
  callCount = callCount + 1;
};
ref(42, null,);
assert.sameValue(callCount, 1, 'function invoked exactly once');