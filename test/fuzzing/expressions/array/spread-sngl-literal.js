var callCount = 0;
(function() {
  assert.sameValue(arguments.length, 3);
  assert.sameValue(arguments[0], 3);
  assert.sameValue(arguments[1], 4);
  assert.sameValue(arguments[2], 5);
  callCount += 1;
}.apply(null, [...[3, 4, 5]]));
assert.sameValue(callCount, 1);