var callCount = 0;
new function() {
  assert.sameValue(arguments.length, 5);
  assert.sameValue(arguments[0], 5);
  assert.sameValue(arguments[1], 6);
  assert.sameValue(arguments[2], 7);
  assert.sameValue(arguments[3], 8);
  assert.sameValue(arguments[4], 9);
  callCount += 1;
}(5, ...[6, 7, 8], 9);
assert.sameValue(callCount, 1);