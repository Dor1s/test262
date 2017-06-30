var callCount = 0;
function ref() {
  assert.sameValue(arguments.length, 2);
  assert.sameValue(arguments[0], 42);
  assert.sameValue(arguments[1], undefined);
  callCount = callCount + 1;
}
ref(42, undefined,);
assert.sameValue(callCount, 1, 'function invoked exactly once');