let o = {b: 2};
Object.defineProperty(o, "a", {value: 1, enumerable: true, writable: false, configurable: true});
var callCount = 0;
new function(obj) {
  assert.sameValue(obj.a, 3)
  assert.sameValue(obj.b, 2);
  verifyEnumerable(obj, "a");
  verifyWritable(obj, "a");
  verifyConfigurable(obj, "a");
  verifyEnumerable(obj, "b");
  verifyWritable(obj, "b");
  verifyConfigurable(obj, "b");
  callCount += 1;
}({...o, a: 3});
assert.sameValue(callCount, 1);