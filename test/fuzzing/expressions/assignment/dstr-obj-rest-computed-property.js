var a = "foo";
var b, rest;
var result;
var vals = { foo: 1, bar: 2, baz: 3 };
result = {[a]:b, ...rest} = vals;
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
assert.sameValue(result, vals);