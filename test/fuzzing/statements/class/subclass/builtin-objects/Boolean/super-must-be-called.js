class Bln extends Boolean {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new Bln(1);
});
class Bln2 extends Boolean {
  constructor() {
    super();
  }
}
var b = new Bln2(1);
assert(b instanceof Boolean);