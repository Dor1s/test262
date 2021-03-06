let o = {a: 2, b: 3};
let executedGetter = false;
var callCount = 0;
(function(obj) {
  assert.sameValue(obj.a, 2);
  assert.sameValue(obj.b, 3);
  assert.sameValue(executedGetter, false)
  assert.sameValue(Object.keys(obj).length, 3);
  callCount += 1;
}({...o, get c() { executedGetter = true; }}));
assert.sameValue(callCount, 1);