class S1 extends String {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new S1();
});
class S2 extends String {
  constructor() {
    super();
  }
}
new S2();