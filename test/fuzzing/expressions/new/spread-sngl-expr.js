var source = [2, 3, 4];
var target;
var callCount = 0;
new function() {
  assert.sameValue(arguments.length, 3);
  assert.sameValue(arguments[0], 2);
  assert.sameValue(arguments[1], 3);
  assert.sameValue(arguments[2], 4);
  assert.sameValue(target, source);
  callCount += 1;
}(...target = source);
assert.sameValue(callCount, 1);