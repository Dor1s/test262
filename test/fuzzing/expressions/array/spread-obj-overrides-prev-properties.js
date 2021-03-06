let o = {a: 2, b: 3};
var callCount = 0;
(function(obj) {
  assert.sameValue(obj.a, 2);
  assert.sameValue(obj.b, 3);
  assert.sameValue(Object.keys(obj).length, 2);
  assert.sameValue(o.a, 2);
  assert.sameValue(o.b, 3);
  callCount += 1;
}.apply(null, [{a: 1, b: 7, ...o}]));
assert.sameValue(callCount, 1);