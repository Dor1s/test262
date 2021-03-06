var rest;
var obj = {a: 3, b: 4};
Object.defineProperty(obj, "x", { value: 4, enumerable: false });
var counter = 0;
for ({...rest} of [obj]) {
  assert.sameValue(rest.a, 3);
  assert.sameValue(rest.b, 4);
  assert.sameValue(Object.getOwnPropertyDescriptor(rest, "x"), undefined);
  verifyEnumerable(rest, "a");
  verifyWritable(rest, "a");
  verifyConfigurable(rest, "a");
  verifyEnumerable(rest, "b");
  verifyWritable(rest, "b");
  verifyConfigurable(rest, "b");
  counter += 1;
}
assert.sameValue(counter, 1);