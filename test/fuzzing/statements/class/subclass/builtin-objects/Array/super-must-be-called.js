class A extends Array {
  constructor() {}
}
assert.throws(ReferenceError, function() {
  new A();
});
class A2 extends Array {
  constructor() {
    super();
  }
}
new A2();