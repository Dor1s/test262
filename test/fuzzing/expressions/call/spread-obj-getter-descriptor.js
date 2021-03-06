let o = {
    get a() {
        return 42;
    }
};
var callCount = 0;
(function(obj) {
  assert.sameValue(Object.getOwnPropertyDescriptor(obj, "a").value, 42);
  assert.sameValue(obj.c, 4);
  assert.sameValue(obj.d, 5);
  assert.sameValue(Object.keys(obj).length, 3);
  verifyEnumerable(obj, "a");
  verifyWritable(obj, "a");
  verifyConfigurable(obj, "a");
  callCount += 1;
}({...o, c: 4, d: 5}));
assert.sameValue(callCount, 1);