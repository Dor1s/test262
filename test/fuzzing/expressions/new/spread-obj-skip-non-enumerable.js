let o = {};
Object.defineProperty(o, "b", {value: 3, enumerable: false});
var callCount = 0;
new function(obj) {
  assert.sameValue(obj.hasOwnProperty("b"), false)
  assert.sameValue(Object.keys(obj).length, 0);
  callCount += 1;
}({...o});
assert.sameValue(callCount, 1);