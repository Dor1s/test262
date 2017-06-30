var callCount = 0;
new function() {
  assert.sameValue(arguments.length, 0);
  callCount += 1;
}(...[]);
assert.sameValue(callCount, 1);