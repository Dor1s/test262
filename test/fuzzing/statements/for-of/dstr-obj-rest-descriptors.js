var rest;
var obj = {};
Object.defineProperty(obj, "a", { value: 3, configurable: false, enumerable: true });
Object.defineProperty(obj, "b", { value: 4, writable: false, enumerable: true });
var counter = 0;
for ({...rest} of [obj]) {
  assert.sameValue(rest.a, 3);
  assert.sameValue(rest.b, 4);
  verifyEnumerable(rest, "a");
  verifyWritable(rest, "a");
  verifyConfigurable(rest, "a");
  verifyEnumerable(rest, "b");
  verifyWritable(rest, "b");
  verifyConfigurable(rest, "b");
  counter += 1;
}
assert.sameValue(counter, 1);