class D extends Date {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new D();
});
class D2 extends Date {
  constructor() {
    super();
  }
}
new D2();