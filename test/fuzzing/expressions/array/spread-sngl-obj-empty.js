var callCount = 0;
(function(obj) {
  assert.sameValue(Object.keys(obj).length, 0);
  callCount += 1;
}.apply(null, [{...{}}]));
assert.sameValue(callCount, 1);