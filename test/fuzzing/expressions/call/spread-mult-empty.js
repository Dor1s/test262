var callCount = 0;
(function() {
  assert.sameValue(arguments.length, 3);
  assert.sameValue(arguments[0], 1);
  assert.sameValue(arguments[1], 2);
  assert.sameValue(arguments[2], 3);
  callCount += 1;
}(1, 2, 3, ...[]));
assert.sameValue(callCount, 1);