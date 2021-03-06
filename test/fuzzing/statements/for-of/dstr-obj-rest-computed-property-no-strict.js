var a = "foo";
var counter = 0;
for ({[a]:b, ...rest} of [{ foo: 1, bar: 2, baz: 3 }]) {
  assert.sameValue(b, 1);
  assert.sameValue(rest.bar, 2);
  assert.sameValue(rest.baz, 3);
  assert.sameValue(Object.getOwnPropertyDescriptor(rest, "foo"), undefined);
  verifyProperty(rest, "bar", {
    enumerable: true,
    writable: true,
    configurable: true
  });
  verifyProperty(rest, "baz", {
    enumerable: true,
    writable: true,
    configurable: true
  });
  counter += 1;
}
assert.sameValue(counter, 1);