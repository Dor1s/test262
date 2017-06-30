let executedSetter = false;
var callCount = 0;
(function(obj) {
  assert.sameValue(obj.c, 1);
  assert.sameValue(executedSetter, false);
  assert.sameValue(Object.keys(obj).length, 1);
  callCount += 1;
}.apply(null, [{set c(v) { executedSetter = true; }, ...{c: 1}}]));
assert.sameValue(callCount, 1);