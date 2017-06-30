let o = {};
Object.defineProperty(o, "b", {value: 3, enumerable: false});
var callCount = 0;
(function(obj) {
  assert.sameValue(obj.hasOwnProperty("b"), false)
  assert.sameValue(Object.keys(obj).length, 0);
  callCount += 1;
}.apply(null, [{...o}]));
assert.sameValue(callCount, 1);