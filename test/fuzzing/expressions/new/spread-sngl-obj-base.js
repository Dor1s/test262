var callCount = 0;
new function(obj) {
  assert.sameValue(obj.c, 3);
  assert.sameValue(obj.d, 4);
  assert.sameValue(Object.keys(obj).length, 2);
  verifyEnumerable(obj, "c");
  verifyWritable(obj, "c");
  verifyConfigurable(obj, "c");
  verifyEnumerable(obj, "d");
  verifyWritable(obj, "d");
  verifyConfigurable(obj, "d");
  callCount += 1;
}({...{c: 3, d: 4}});
assert.sameValue(callCount, 1);