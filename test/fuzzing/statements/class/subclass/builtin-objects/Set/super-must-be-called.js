class S1 extends Set {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new S1();
});
class S2 extends Set {
  constructor() {
    super();
  }
}
new S2();