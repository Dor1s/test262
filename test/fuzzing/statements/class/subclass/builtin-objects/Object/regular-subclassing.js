class Obj extends Object {}
var obj = new Obj();
assert.notSameValue(
  Object.getPrototypeOf(obj), Object.prototype,
  'returns the class prototype'
);