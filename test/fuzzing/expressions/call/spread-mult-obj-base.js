var callCount = 0;
(function(obj) {
  assert.sameValue(obj.a, 1);
  assert.sameValue(obj.b, 2);
  assert.sameValue(obj.c, 3);
  assert.sameValue(obj.d, 4);
  assert.sameValue(Object.keys(obj).length, 4);
  verifyEnumerable(obj, "c");
  verifyWritable(obj, "c");
  verifyConfigurable(obj, "c");
  verifyEnumerable(obj, "d");
  verifyWritable(obj, "d");
  verifyConfigurable(obj, "d");
  callCount += 1;
}({a: 1, b: 2, ...{c: 3, d: 4}}));
assert.sameValue(callCount, 1);