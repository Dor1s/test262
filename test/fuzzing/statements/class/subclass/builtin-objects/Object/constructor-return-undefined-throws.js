class Obj extends Object {
  constructor() {
    return undefined;
  }
}
class Obj2 extends Object {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new Obj();
});
assert.throws(ReferenceError, function() {
  new Obj2();
});