class S1 extends Symbol {}
assert.throws(TypeError, function() {
  new S1();
});
class S2 extends Symbol {
  constructor() {
    super();
  }
}
assert.throws(TypeError, function() {
  new S2();
});