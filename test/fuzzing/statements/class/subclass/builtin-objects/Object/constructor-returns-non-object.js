class Obj extends Object {
  constructor() {
    return 42;
  }
}
assert.throws(TypeError, function() {
  var obj = new Obj();
});