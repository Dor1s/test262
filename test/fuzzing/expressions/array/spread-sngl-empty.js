var callCount = 0;
(function() {
  assert.sameValue(arguments.length, 0);
  callCount += 1;
}.apply(null, [...[]]));
assert.sameValue(callCount, 1);