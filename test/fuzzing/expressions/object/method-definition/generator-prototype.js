var obj = { *method() {} };
assert.sameValue(
  Object.getPrototypeOf(obj.method),
  Object.getPrototypeOf(function*() {})
);