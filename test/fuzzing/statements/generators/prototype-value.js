function* g() {}
assert.sameValue(
  Object.getPrototypeOf(g()),
  g.prototype,
  'Instance created via function invocation'
);