var callCount = 0;
(function(obj) {
  assert.sameValue(obj.a, 1);
  assert.sameValue(obj.b, 2);
  assert.sameValue(Object.keys(obj).length, 2);
  callCount += 1;
}.apply(null, [{a: 1, b: 2, ...{}}]));
assert.sameValue(callCount, 1);